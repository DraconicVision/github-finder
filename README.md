# What is react?

React is a client-side JS library. React is component based.

Technically it's a library but most call it a framework as it functions like a framework, especially when combined with wildly popular React-specific Node packages.

## What is a client-side JS library?

The JS runs on the client device rather than the server, this means it takes up more CPU and RAM resources on the client device but reduces load on the server.
Generally, this approach leans towards a faster page load.

## What does 'component based' mean?

Component based means that it every piece of the webpage or app is a separate component, using separate files. These components are all are eventually imported into one file, usually the `app.js` file.

## React is a SPA

React is a SPA (Single Page Application) framework. This is part of what makes it so fast. Everything outputs to the index.html file within the `/public` folder.

## Deploying a React App

By default the `create-react-app` comes with a script that builds your application by simply running `npm run build`. It will create a `/build` folder that will be your production files. These are the files that would be actually hosted by your server such as Heroku.

## Typechecking with propTypes

When you are using props it's best to check passed props are the correct data type (typechecking), use `<PROP-NAME>.propTypes` to set the expected data type. Read more [here](https://reactjs.org/docs/typechecking-with-proptypes.html 'ReactJS Typechecking Docs').

Note, you can check an typecheck an entire application using TypeScript (a JS extension.) Check it out [here](https://www.typescriptlang.org/ 'TypeScript Website').

#### Misc. Notes

- React uses a Virtual DOM (Document Object Model). This makes manipulating the DOM require less code.

- Node.js is required for React. The NPM (Node Package Manager) is used to install packages such as 'Create React App.'

- Within the `package.json` of the default `create-react-app` web app you'll find it has a **react-dom** dependency. This allows react to interact with the DOM. If you were creating a **React Native** app this wouldn't be required.

- React uses webpack which is a module bundler, using babel. This is mostly behind the scenes unless you're creating a very complex React app.

- Setting a state on a component is just setting an object.
