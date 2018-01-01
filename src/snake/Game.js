import React, { Component } from 'react';
import Box from './Box'
import './Game.css'

class Game extends Component {
    render() {
        return (
            <div className="game">
                <h1>
                    贪吃蛇游戏
                    <img src="/assets/game.svg"/>
                </h1>
                <Box></Box>
                <footer>
                    React App / <a href="https://github.com/joaner/snake-game" target="_blank">Github Project</a>
                </footer>
            </div>
        );
    }
}

export default Game;
