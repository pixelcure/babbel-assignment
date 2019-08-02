# Babel Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Things I added:
- `MR` button for removing memory, `C` just clears the values but will continue to store any existing value in the `memory` prop.

### Things I Still needed to work on:
___
* I initially added some extra tests, however as I continued working on the project I came a bit over 2.5 hours and needed to move on to another code assignment. If this was to be a real world example, I would be testing my reducers more heavily and in terms of the functionality.
* The calculator is not as robust as it could be, you can do a few simple operations but if you try to chain expressions after 2nd operation, things get a bit weird. This would require some more logic to see where we are in the expression and how to handle the `displayValue` and `firstNumber` properties
* After thinking more, having to leverage the current state of the reducer `calculator` I would have maybe tried to break some of this functionality off into more helper functions, which would allow the reducer to be more strict on just returning state, not doing conditional checking.
* If I was to do this again, I may think about using a array as a data structure for my values, then looking at the middle index to determine the operator if we are equating an expression. This seems a bit cleaner, and then you could join the indexes of the array for your actual display value, showing your operator (better UX)

Overall, I thought this was a fun assignment, but with the shorter timeline and having a lot of things in my pipeline, this is a MVP at best


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
