# React Commands

I'm documenting my use of React commands here.

This is mostly personal notes, [read the docs](https://reactjs.org/docs/ 'ReactJS Docs').

## Create React App

`npx create-react-app <APP-NAME>`
This will create a boiler-plate single page React app in a folder within the directory you are currently in. Ex: If you run this command in `C:/` it will create the app in `C:/<APP-NAME>`

To create the app within directly within your current directory do:
`npx create-react-app .`

### React Scripts

Within the default `package.json` created by `create-react-app` there's a few scripts. These are listed below with documentation.

#### start

`npm start`
This will run your hot-reload **development server** on localhost:3000. Note, this is not running the production server.

#### build

`npm run build`
This will build your static assets which will be used in production. This is what will be deployed and hosted as the end product.

#### test

#### eject

God knows. Something to do with webpack. If you need to dig into the webpack configs this is what you would use. Currently the usage of this is beyond the scope of my knowledge and it's scary to me. Fear the eject script.
