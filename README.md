Etch-A-Sketch Grid Drawing App

Project Summary
    This project is a web-based drawing application inspired by the classic Etch-A-Sketch toy. It allows users to dynamically generate a grid of square cells and "draw" on them by simply hovering their mouse over each square. The background color of each square changes randomly on hover, creating a fun and interactive experience.

Features
    Dynamic Grid Creation:
    A default 16×16 grid is created on page load. Users can also input their own custom grid size (up to 100×100) using a prompt.

    Hover Drawing with Random Colors:
    Each square changes to a random RGB color when hovered over with the mouse.

    Clear Button:
    Instantly clears all colors from the grid without changing the structure.

    "Create New Grid" Button:
    Prompts users for a new size and rebuilds the grid with the new dimensions.

    Knob-style Buttons:
    Styled to look like the physical knobs on a real Etch-A-Sketch, enhancing the visual theme.

Tech Used
    HTML5 for structure

    CSS3 for styling and layout

    Vanilla JavaScript (ES6) for interactivity and DOM manipulation

How to Run
    Clone the repository or download the files.

    Open index.html in any modern web browser.

    Start sketching by hovering over the grid squares!

    Click "Create New Grid" to enter a new grid size.

    Click "Clear Grid" to reset the board.

Ideal For
    Beginners learning DOM manipulation, event handling, and dynamic styling.

    Projects or assignments that explore JavaScript interactivity without using external libraries.# etch-a-sketch



Pseudocode: 

1. Setup and Create Default Grid
    START

    FIND the container element where grid squares will go
    SET grid size to 16 (default)

    DEFINE a function to create the grid:
        FOR each square in the grid (gridSize × gridSize):
            - CREATE a new div (square)
            - ADD a class for styling
            - SET width and height so all squares fit evenly
            - ADD a black border and center alignment
            - ADD the square to the container

    CALL the function to create the default 16×16 grid


2. Generate Random Color on Hover

    DEFINE a function to get a random number up to a max value

    DEFINE a function to change background color of a square:
        - CREATE a random RGB color using three random numbers
        - SET the background color of the hovered square to that color

    DEFINE a function to add hover behavior to each square:
        - FIND all squares in the grid
        - FOR each square:
            - ADD a mouseover event that changes the square’s color

    CALL the function to activate hover behavior


3. Clear Grid Helper Function

    DEFINE a function to remove all squares from the container:
        - WHILE the container still has child elements:
            - REMOVE the first child

    (This will be used before making a new grid)

4. Make New Grid Based on User Input

FIND the "Create New Grid" button

    DEFINE a function to create a new grid with user input:
        - ASK user to enter a number (grid size)
        - CONVERT input to whole number
        - IF the number is over 100:
            - SHOW an alert and STOP
        - IF user cancels input:
            - SHOW a message and STOP
        - REMOVE all existing squares
        - CALL the function to create a grid with new size
        - ADD hover behavior to new squares

    WHEN "Create New Grid" button is clicked:
        - RUN the new grid function


5. Clear All Colored Squares

    FIND the "Clear Grid" button

    DEFINE a function to clear all background colors:
        - FIND all squares
        - FOR each square:
            - REMOVE its background color

    WHEN "Clear Grid" button is clicked:
        - RUN the clear color function




Thought Process: 

Program: 

1. Create a webpage with a 16*16 grid of square divs. 

    a. Create the divs using JavasScript. 
    b. Put your grid squares inside a "container" div. This can be written in your HTML file. 
    c. Use Flex-box to make the divs appear as a grid (versus just one on each line)
    d. Be careful with borders and margins, as they can adjust the size of the squares! 

    Pseudocode: 

        1. Find the HTML element with the class "container" and store it in a variable called container.

        2. Set a variable called gridDivSize to 16.
        (This will be used to create a 16 x 16 grid, which means 256 items.)

        3. Define a function called createContainerDivs:
            a. Repeat the following steps (gridDivSize * gridDivSize) times:
                i.   Create a new div element.
                ii.  Add the class "dynamic-div-item" to the new div.
                iii. Set the text inside the div to the current number (starting from 1).
                iv.  Add the div to the container element on the page.

        4. Call the createContainerDivs function to build the grid.
        

2. Set up a “hover” effect so that the grid divs change color when  your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

    a. Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.

    b. There are multiple ways to change the color of the divs, including: 
        -Adding a new class to the div.
        -Changing the div’s background color using JavaScript.

    Pseudocode: 

        1. Select all the divs inside the container using query selector all and store them inside a variable. This will allows us to manipulate the DOM. 

        2. Create a function that will randomly change the rbg background color of the divs. This will act as a call back when we create event listener on 3. Remember to pass an event object to be able to use event.target. 

        3. Add an mouse over event listener to the variable storing all the divs to run the function on 2. to highlight the event target/div with a random color.

        FUNCTION random(number)
            SET result TO a random decimal between 0 and 1
            MULTIPLY result by (number + 1)
            ROUND result down to the nearest whole number
            RETURN result
        END FUNCTION

        FUNCTION bgChange(event)
            SET color TO "rgb(random(255) random(255) random(255))"
            SET the background color of event.target TO color
            PRINT event details to the console
        END FUNCTION

        FUNCTION hover
            SET elements TO all items with class "dynamic-div-item"
            FOR EACH element IN elements
                WHEN mouse moves over element
                    CALL bgChange with the event
                END WHEN
            END FOR
        END FUNCTION

        CALL hover

3. Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
    
    a. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

    a. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
    
    b. Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
    
    c. Also check out prompts.
    
    d. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

    Pseudocode: 

        Click button and generate a prompt requesting user enter grid dimensions e.g 16 *16. 

        1.Select button from the DOM.

        2.Write a function that prompts the user to enter grid dimensions e.g
        16*16 and store it in a variable such as user grid div size. Add an 
        if statement to handle edge conditions (if user enters number > 100,
        user clicks escape and anything else). 

            Use the user grid div size to prompt user response in the created function createContainerDivs () to create the new grid. 

            Write a repeatable function that will apply css properties that 
            will manipulate the layout of the grid immediately after it is created
            e.g. if parameter/user/prompt response entered grid size is 
            16*16 (a = 16)see below: 

            .dynamic-div-item {
            width: 6.25%;   /* 100%/(a = 16) columns = 6.25% for each item */
            height: 6.25%;  /* For a perfect square grid*/
            border: 1px solid lightgrey;
            display: flex;  /* Center content within each item */
            justify-content: center;
            align-items: center;
            font-size: 1.2em;
            }

        4.Add an event listener run the call back function in 2. when clicked. 
        

4. Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

    a. Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.

    b. Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions.

        - Hint: The opacity CSS property is useful here. To learn how to use it, check this MDN docs article about the opacity CSS property.











