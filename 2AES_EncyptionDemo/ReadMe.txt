This project show demo of how to perform encryption and decryption using AES
AES stands for "Advanced Encryption Standard".
It is a tool that is used to encrypt and decrypt the simple text using AES encryption algorithm.

NOTE :
=======
1. Encryption/Decryption can be performed in Angular
2. Decryption can also be tested in C#

You should create new angular project 
ng new cryptoAESDEmo 

Install required libraries 
npm install crypto-js --save
npm install bootstrap --save

Copy contents of app.component.html and app.component.ts into project folder. 
They contain Angular support for encryption and decryption When you run your application You will get screen containing 
both encryption and decryption forms. 
For encryption you need plain text and secret key. 
Similarly for decryption you need "encrypted text" and same secret key. 

Now you can use these values to test decryption login in C# program. 


