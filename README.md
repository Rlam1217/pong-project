# Pong Game Starter

A starter project for a basic pong game using SVGs.

## Keys

### Player 1:
* w: up
* s: down

### Player 2:
* ▲: up
* ▼: down

## Features

* Each time the ball hits the paddles it sounds and changes color.
* Multiple balls are triggered when a Player reaches a Score of 6.
* The Player's paddle with the higher score begins to shrink for fun competitive gameplay.
* First Player to the Score of 15 is the Winner!

## Personal Learnings

* Building this game was my intro to JavaScript.
* Using Node.js to run JavaScript on a server.
* Using classes and constructors.
* Using SVGs.

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site 🙂
