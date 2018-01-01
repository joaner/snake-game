import React, { Component } from 'react';
import Box from './Box'
import './Game.css'

class Game extends Component {
    render() {
        return (
            <div className="game">
                <h1>贪吃蛇游戏</h1>
                <Box></Box>
            </div>
        );
    }
}

export default Game;
