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

PROJECT WORKFLOW:

#Main Execution
- When user click on Nav Links, the application make a call to contentful's content type.
- The valid query constants map with content type which are defined in the 'src/appConstants.js'  
  e.g. PEOPLE constant responsbile to query 'persons' content type.
       PUBLICAITONS constant responsible to query 'publications' content type etc
       important to note: in every page/component/context the queries are made by query constants only.
- The valid query names are further imported in 'src/components/Header/Header.js'
  Each Navigation link on click will update the 'query' state in 'src/appContext'
  The actual query to contentful is made inside 'useEffect' present in the appContext

#useContentful hook 
- The useContentful hook is defined in '/src/hooks/useContentful'
- This hook takes content type (in our project its valid query constants defined in appConstants) as a parameter and return success or failed promise
- This hook used inside 'appContext' to make any query.

#appContext.js
- imports all the query constants and useContentful hook to get response from contentful
- The 'query' state is dynamic which updates everytime the user click on navigation links
- The  'response' state is also dynamic that stores information.
- Important to Note: the 'response' and 'query' state always changes
- The function 'cmsQuery' takes 'query' state as an argument and queries content type from 'useContentful' hook
  'cmsQuery' is called in useEffect() so that it executes everytime user click on different nav links
- Some states like 'projectsData', 'homepageData', 'bannerContent' does not changes on user activity. They are loaded once the components loads and stays.

#Projects/People/Publications/Home/Training pages
- All pages have access to associated query constant. When user refresh the page, the page set the query state present in 'appContext' by passing query constant as
  a parameter
  
#filterContext.js
- This context is solely responsible for any changes when user wish to filter data. This functionality is on going.






