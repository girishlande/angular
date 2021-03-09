const express = require('express');
const jwt = require('jsonwebtoken');

var app = express();
app.listen(5000, () => console.log('listening on port 5000'));

app.get('/api', (req, res) => {
    console.log('Connection requst');
    res.json({
        msg: 'welcome to api!!'
    });
});

app.post('/api/login', (req, res) => {
    const user = {
        name: 'girish lande',
        email: 'girishlande@gmail.com'
    };
    
    jwt.sign({ user }, 'ajit', (err, token) => {
        res.json({
            msg: "token generated",
            token: token
        });
    });
});

app.post('/api/createpost', verifyToken, (req, res) => {
    jwt.verify(req.token, 'ajit', (err, AuthData) => {
        res.json({
            msg: "post created",
            authData:AuthData
        });
    })
    
});

function verifyToken(req, res, next) {

    const headers = req.headers['authorization'];
    if (typeof headers != 'undefined') {
        const agrs = headers.split(' ');
        const tokeninfo = agrs[1];
        req.token = tokeninfo;
        next();
    } else {
        res.json({
            msg: 'authorization information is missing'
        });
    }
    
    
}


