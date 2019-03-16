# [It Just Clicks](https://arethashwalls.github.io/ItJustClicks/)
## A simple click-based memory game built with React, created for UA Coding Bootcamp.

Our first full React application is a click-based memory game. Building this application was an exercise in managing state between React components at different levels in a hierarchy.

*It Just Clicks* uses:

* [React](https://reactjs.org/) as a front-end UI library.
* [Materialize for React](https://react-materialize.github.io/#/) for styling.
* [ReactDOM](https://www.npmjs.com/package/react-dom) and [Classnames](https://www.npmjs.com/package/classnames), two pieces of React middleware.

### Contents:

The following development files are visible in the `master` branch:

* `public` contains all public, front-end code.
  * `images`
  * [`index.html`](/public/index.html) is the HTML base.
  * `js`
    * [`app.js`](/public/js/app.js) contains one Materialize utility function.
* `src` contains all React components.
  * `components`
    * [`Image`](/src/components/Image`] contains styles and definitions for the Image component.
    * [`ImageBox`](/src/components/ImageBox`] contains styles and definitions for the ImageBox component.
    * [`TopNav`](/src/components/TopNav`] contains styles and definitions for the TopNav component.
  * [`App.js`](/src/App.js) is a stateful component that brings the three sub-components together.
  * [`allLangs.json`](/src/allLangs.json) contains data for each image used in the game.
* A `gitignore` file
* Yarn's `yarn.lock` and `package.json` files.
* This `readme`.

### Application:

The application displays twelve images (each a logo of a popular programming language) in a responsive grid. A state within [`App.js`](/src/App.js) tracks clicks made to each image. If the user clicks an image has not been clicked within the current game, the user earns a point which updates TopNav component. If the image has been clicked, the grid shakes to notify the user, the game resets. The user's top score is tracked within a single session.
