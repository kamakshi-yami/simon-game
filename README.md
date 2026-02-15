# 🎮 Simon Game (Web Version)

A classic memory skill game built for the web. This project features a complete **User Interface (UI)** and is currently implementing the core **JavaScript logic** for game sequences and level tracking.

> **Current Status:** 🚧 *Work in Progress* (UI complete, Game Initialization & Flash logic implemented. User input validation in progress).

## 🚀 About The Project

The goal of this project is to recreate the famous "Simon" electronic game where players must repeat random sequences of lights.
* **Current State:** The visual structure is fully responsive. The JavaScript engine now successfully starts the game on keypress, tracks levels, and generates a random color flash to start the sequence.
* **Next Steps:** Completing the event listeners for the buttons so the game can check if the user's clicks match the generated sequence.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure for the game board.
* **CSS3:** Styling, Flexbox, and CSS Grid layout.
* **JavaScript:** DOM manipulation, event handling, and randomized sequence generation.

## 🎨 Code Highlights

The JavaScript logic now handles dynamic level progression and random color selection to build the game's sequence:

```javascript
function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    
    // Generates a random number from 0 to 3 to pick a color
    let num = Math.floor(Math.random() * 4);
    let randomColor = color[num];
    
    // Triggers the visual flash effect
    let radBtn = document.querySelector(`.${randomColor}`);
    flash(radBtn);
}
