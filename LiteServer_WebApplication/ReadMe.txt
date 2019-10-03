// Creating simple web application using lite-server

1. Create new folder "test_lite"
mkdir test_lite

2. Go inside folder 
cd test_lite

3. initialise project
npm init -y (-y to create with all default options)

4. Install lite-server using following command
npm install --save-dev lite-server

5. Edit package.json file to run lite-server
"scripts": { "start": "lite-server"},

6. Add index.html file in project

7. Run application using following command
npm start

8. If you want to start application from sub folder create bs-config.js file and use following code. 
module.exports = {
    "port": 8123,
    "server": { "baseDir": "./src" }
};

Modify as needed 

another e.g 
// This custom configures BrowserSync. Specifically to serve from /admin

module.exports = {
  startPath: "/admin/index.html",
  server: {
    baseDir: "./../", 
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({index: '/admin/index.html' })
    }
  }
};

/// Running lite-server for angular application using cli 
9. If you try to run lite-server in angular application created using cli then you may encounter some error with jasmin
in that case use following option in tsconfig.json
"skipLibCheck": true,

10. Install concurrently 
npm install -g concurrently


