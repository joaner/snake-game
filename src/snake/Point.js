import React, { Component } from 'react';

export default class Point extends Component {
    render() {
        let className = 'point '
        className += ((this.props.x + this.props.y) % 2) === 0 ? 'odd' : 'even'
        return <div className={className}></div>
    }
}