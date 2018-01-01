import React, { Component } from 'react';
import Point from './Point'

export default class Box extends Component {
    render() {
        // 16x16方格
        const keys = Array.from(Array(20).keys())

        const rows = keys.map(y => {
            const cells = keys.map(x => {
                const key = `point-${y}-${x}`
                return <Point key={key} x={x} y={y}></Point>
            })

            const key = `point-${y}`
            return <div className="row" key={key}>{cells}</div>
        })
        return <div className="box">{rows}</div>
    }
}