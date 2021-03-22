# What is react?

React is a client-side JS library. React is component based.

## What is a client-side JS library?

The JS runs on the client device rather than the server, this means it takes up more CPU and RAM resources on the client device but reduces load on the server.
Generally, this approach leans towards a faster page load.

## What does 'component based' mean?

Component based means that it every piece of the webpage or app is a separate component, using separate files. These components are all are eventually imported into one file, usually the `app.js` file.

#### Misc. Notes

- React uses a Virtual DOM (Document Object Model). This makes manipulating the DOM require less code.

- Node.js is required for React. The NPM (Node Package Manager) is used to install packages such as 'Create React App.'

- Within the `package.json` of the default `create-react-app` web app you'll find it has a **react-dom** dependancy. This allows react to interact with the DOM. If you were creating a **React Native** app this wouldn't be required.
