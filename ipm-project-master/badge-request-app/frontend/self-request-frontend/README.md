
## About the app

Self-request app for badges that are normally requested in paper format in reception  and involves human work of receptionist. 
App built with React, JavaScript, and CSS. App has 2 main components Visitor and Employee, each of the components has its own form.  
Before running the project nodejs needs to be installed. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Dockerizing the app

To created image 

### `docker build . -t *name*`

To created and run new comtainer instance in port 3000(local port):3000 (container port) from image just created 

### `docker run -p 3000:000 *name*`

Open new terminal and show all running processes 

### `docker ps`

To see what is inside container 

### `docker exec *containerID* sh`

ls->npm start-> yes