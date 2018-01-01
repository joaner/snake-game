import React, { Component } from 'react';
import Point from './Point'

export default class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activePoints: [
                [3,2], [4,2], [5,2]
            ],
            direction: null,
            targetPoint: [12,8],
            size: 24,
            message: '任意键开始',
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', event => {
            let direction

            // 不能向反方向掉头
            const activePoints = this.state.activePoints
            const head = activePoints[activePoints.length - 1]
            const last = activePoints[activePoints.length - 2]

            switch (event.key) {
                case 'ArrowRight':
                    if (head[0] - last[0] !== -1) {
                        direction = 'right'
                    }
                    break
                case 'ArrowLeft':
                    if (head[0] - last[0] !== 1) {
                        direction = 'left'
                    }
                    break
                case 'ArrowUp':
                    if (head[1] - last[1] !== 1) {
                        direction = 'up'
                    }
                    break
                case 'ArrowDown':
                    if (head[1] - last[1] !== -1) {
                        direction = 'down'
                    }
                    break
                default:
                    if (!this.state.direction) {
                        direction = 'right'
                    }
            }

            if (direction) {
                this.setState({ direction })
            }
        }, false)

        setInterval(() => {
            const activePoints = this.state.activePoints

            const head = activePoints[activePoints.length - 1]
            let [x, y] = head

            try {
                switch (this.state.direction) {
                    case 'left':
                        x -= 1
                        break
                    case 'right':
                        x += 1
                        break
                    case 'up':
                        y -= 1
                        break
                    case 'down':
                        y += 1
                        break
                    default:
                        return
                }

                // if overflow
                if (x < 0 || x >= this.state.size || y < 0 || y >= this.state.size) {
                    throw new Error('撞墙啦 >_<')
                }

                // if hit self
                const hitSelf = activePoints.find(point => this.isPointMatch([x, y], point))
                if (hitSelf) {
                    throw new Error('咬到自己啦')
                }
            } catch (e) {
                this.setState({ message: e.message })
                return
            }


            const newHead = [x, y]
            if (this.isPointMatch(newHead, this.state.targetPoint)) {
                this.setState({ targetPoint: this.makeTargetPoint() })
            } else {
                activePoints.shift()
            }
            activePoints.push(newHead)

            this.setState({ activePoints, message: '' })
        }, 300)
    }

    render() {
        // point map
        const keys = Array.from(Array(this.state.size).keys())

        const rows = keys.map(y => {
            const cells = keys.map(x => {
                const key = `point-${y}-${x}`
                const sourcePoint = [x, y]
                const isActive = this.state.activePoints.find(point => {
                    return this.isPointMatch(sourcePoint, point)
                })
                const isTarget = this.isPointMatch(sourcePoint, this.state.targetPoint)

                let isHead = false

                if (isActive) {
                    const headPoint = this.state.activePoints[this.state.activePoints.length - 1]
                    isHead = this.isPointMatch(sourcePoint, headPoint)
                }

                return <Point key={key}
                              x={x}
                              y={y}
                              isActive={isActive}
                              isTarget={isTarget}
                              isHead={isHead}
                ></Point>
            })

            const key = `point-${y}`
            return <div className="row" key={key}>{cells}</div>
        })
        return <div className="container">
            <div className="caption">
                <span>得分：{this.state.activePoints.length - 3}</span>
                <span className="message">{this.state.message}</span>
            </div>
            <div className="box">{rows}</div>
        </div>
    }

    /**
     * check point is matched
     * @param sourcePoint
     * @param matchPoint
     * @returns {*|boolean}
     */
    isPointMatch(sourcePoint, matchPoint) {
        return matchPoint && matchPoint[0] === sourcePoint[0] && matchPoint[1] === sourcePoint[1]
    }

    /**
     * create a new target point
     * @returns {*}
     */
    makeTargetPoint() {
        let maxTryCount = 5
        do {
            const x = Math.floor(Math.random() * this.state.size)
            const y = Math.floor(Math.random() * this.state.size)

            const targetPoint = [x, y]

            const excludePoints = [...this.state.activePoints, this.state.targetPoint]
            const exists = excludePoints.find(excludePoint => this.isPointMatch(excludePoint, targetPoint))

            if (!exists) {
                return [x, y]
            }
        } while (maxTryCount--)

        return null
    }
}