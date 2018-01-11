# snake-game

simple snake game based on reactjs

Reference to Google's game design, you can play better game by search **snake game** in google.com

## Demo

Online: [game.xiaoai.me](http://game.xiaoai.me)

<img src="https://raw.githubusercontent.com/joaner/snake-game/master/public/demo.png" alt="snake game demo" height="320px" width="320px" />

### local

- `npm run start` 
- open [localhost:3000](http://localhost:3000)

## Code

React cli created app

```
.
├── README.md
├── build
├── package-lock.json
├── package.json
├── public
│   ├── assets # images
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── registerServiceWorker.js
    └── snake
        ├── Box.js  # main (control many point)
        ├── Game.css # main css
        ├── Game.js # container
        └── Point.js # each point
```
