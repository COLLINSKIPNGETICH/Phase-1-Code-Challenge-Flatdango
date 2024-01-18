# Flatdango Movie Ticket App

## Introduction

Flatdango is a web application that allows users to purchase movie tickets from the Flatiron Movie Theater. This project focuses on implementing a 'mini' web application using JavaScript and fetching data from a local server running JSON DB server.

## Requirements

For this project, you must:

- Have a well-written README file.
- Fetch data from a local server running JSON DB server.

## Project Setup

1. Create a new project folder.
2. Create a new GitHub repository (NB: ENSURE IT IS PRIVATE).
3. Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
4. Please make sure you regularly commit to the repository.

## Project Guidelines

### Core Deliverables

As a user, I can:

- See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`.
- See a menu of all movies on the left side of the page in the `ul#films` element when the page loads.
- Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend.

### Bonus Deliverables

- Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.
- When a movie is sold out, indicate that the movie is sold out by changing the button text to "Sold Out" and updating the film item in the `ul#films` menu by adding a class of `sold-out` to the film.

### Extra Bonus

- When a ticket is purchased, persist the updated number of `tickets_sold` on the server.
- Delete a film from the server. Add a delete button next to each film in the `ul#films` menu. When the button is clicked, remove the film from the list and also delete the film on the server.

## Rubric

*Use the rubric details provided in the original message.*
