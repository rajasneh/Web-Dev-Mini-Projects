**Simon Says Game**
A simple and fun Simon Says Game built using HTML, CSS, and JavaScript. The game tests your memory by showing a sequence of colored buttons, and you have to repeat the sequence in the correct order to advance to the next level.

**Table of Contents**
* Introduction
* Features
* Technologies Used
* How to Play
* Game Logic
* Installation
* Usage
* Contributing
* License
----------------------------------------------------
**Introduction**
The Simon Says Game is a classic memory game where a random sequence of buttons (each with a unique color) will flash, and the player must replicate the sequence by clicking on the buttons in the same order. With each level, a new button is added to the sequence, making the game progressively more challenging.

This project is designed to practice basic DOM manipulation, event handling, and game logic using vanilla JavaScript, while also employing CSS for styling.

-----------------------------------------------------
**Features**
* Simple and intuitive design with colored buttons.
* Levels increase in difficulty with a new button added to the sequence at each level.
* Displays the player's current level.
* Game over logic with the ability to restart the game after failing.
* Responsive for various screen sizes.

------------------------------------------------------
**Technologies Used**
* HTML: Structure of the webpage.
* CSS: Styling for buttons and layout.
* JavaScript: Core game logic and interactivity.

------------------------------------------------------
**How to Play**
1. Press any key to start the game.
2. A button will flash to indicate the start of the sequence.
3. Click the buttons in the same order as they flashed.
4. Each time you successfully complete a sequence, a new button is added to the sequence.
5. If you click the wrong button, it's game over, and you can start again by pressing any key.

------------------------------------------------------
**Game Logic**
* Level Start: When the game starts, a random button from the four available buttons (Red, Yellow, Green, and Purple) is chosen and flashes.
* Player Turn: The player must click the buttons in the same order that they were shown.
* Sequence Building: With each level, the sequence of button flashes grows by one additional random button.
* Game Over: If the player clicks the wrong button, the game is over, and the player's score (number of levels completed) is displayed. The player can restart the game by pressing any key.

-----------------------------------------------------
**Usage**
You can play the game directly by opening the index.html file in any modern browser. No additional setup is required.

----------------------------------------------------
**Contributing**
Feel free to contribute by forking the repository and submitting a pull request. Any improvements or suggestions are welcome!
------------------------------------------------------------------------------------------------------------------------
**Thankyou**
