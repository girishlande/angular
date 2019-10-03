1. Create new project
ng new t1
cd t1

2. install bootstrap 
npm install bootstrap --save

3. Add reference to bootstrap css in angular.json

"styles": [
              
"src/styles.css",
             
"node_modules/bootstrap/dist/css/bootstrap.min.css",
          
],


4. in styles.css update style of required controls 
.btn-default, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
  background-color: #ff0000 !important;
}
