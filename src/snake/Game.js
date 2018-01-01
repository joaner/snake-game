import React, { Component } from 'react';
import Box from './Box'
import './Game.css'

class Game extends Component {
    render() {
        return (
            <div className="game">
                <h1>
                    贪吃蛇游戏
                    <img src="/assets/game.svg" alt="game icon"/>
                </h1>
                <Box></Box>
                <footer>
                    React App / <a href="https://github.com/joaner/snake-game">Github Project</a>
                </footer>
            </div>
        );
    }
}

export default Game;
