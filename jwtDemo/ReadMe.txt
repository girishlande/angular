Hi, 
This is Girish.
THis readme file contains some details about this node project. 
JWT : Json Web Token. 
This token is useful for adding authnetication in your web application. 
Concept is as follows. 
You will add interface in client to accept login details from user. 
These login details will be transferred to "nodejs" program. 
nodejs program can check if the login is correct using stored login and password from database. 
Once details are verified nodejs will create a "token" (json web token) using "jsonwebtoken" api by providing 
"login name, secret key, time to expire" , This api will generate token which you can send back to client as response. 
Client should use this token in successive request for data. Your node application will verify this token each time it 
receives a request for some data. and this will make sure that all requests are authenticated. 

This project gives demo of this concept. 
You will have to install packages such as express, jsonwebtoken and nodemon. 

open command prompt in this folder and fire following command. 
>npm install
this will install all required packages. 
then start application using following command
>nodemon 

This will start a server and will listen on port 5000. 
NOw you can make get/post requsts using some application such as "postman"

First, you should make request to login, this is using dummy user and will return you token. 
Then you should make request for posts using the token that you received from previous call. 
You should add token in the headers "authorization" in format
token 213kj2k3jk2j3kj23kj2kj3k2j3k2j3kj2k3jkj23
