# angular
It will contain my angular projects

Basic commands
=================

npm install -g @angular/cli // to install command line interface for easy creation of angular projects/components etc. 

ng new projectName  // to create new angular project folder. it will contain basic template
cd projectName    // go insider project folder 

ng serve   // start running application 

ng g c componentName --spec false // to create new component in your project

ng g s serviceName --spec false // to write new service which can be used across components for data sharing 

ng add @angular/material  // to add material library to project 

npm install bootstrap --save // to install bootstrap library , you also need to modify angular.json file to include bootstrap.css

npm install @angular/http  // to install http module 

npm install @angular/http@latest  // to use http api if there is some error 

npm install rxjs-compat --save // to use react js concepts such as subject, suscriptions etc

ng build --prod  // to create deployable folder. this will add all your files into compact js files and you can copy it on server. 

code // to start visual studio code IDE. fire from angular project folder 

If you want to update all modules in your projec to their latest version
npm i -g npm-check-updates
ncu -u
npm install


// -------------------------------
// Accessing REST api in localhost.
// ------------------------------- 
This doesn't work when REST client is in Angular and REST server is also on same machine. 

you can start Chrome in following manner for testing purpose 
in Run tool of windows 

chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
