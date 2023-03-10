# DSL project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Recommended VSCode Extensions

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

## Folder Structure

```bash
.
└── /src
    └── /assets
    └── /components
    |    └── /Header
    |        └── Header.js
    |        └── index.js
    └── /pages
    |    └── /Contact
    |        └── Contact.js
    |        └── index.js
    └── /hooks
    |    └── useContentful.js
    └── utils.js
    └── index.js
```
React component folders are utilizing `index.js` files to forward all exports. This allows for easier import references.

### Utils

A `utils.js` file is provided to store any utility functions, any generic function that accomplishes an abstract task. 


## CSS

`SCSS` is enabled for this project.

Now you can rename src/App.css to src/App.scss and update src/App.js to import src/App.scss. This file and any other file will be automatically compiled if imported with the extension .scss or .sass.

For more information you can visit [Adding a Sass Stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
