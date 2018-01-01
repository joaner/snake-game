import React, { Component } from 'react';

export default class Point extends Component {
    render() {
        const classNames = ['point']
        classNames.push(((this.props.x + this.props.y) % 2) === 0 ? 'odd' : 'even')

        if (this.props.isActive) {
            classNames.push('active')
        }
        if (this.props.isTarget) {
            classNames.push('target')
        }
        if (this.props.isHead) {
            classNames.push('head')
        }
        return <div className={classNames.join(' ')}></div>
    }
}