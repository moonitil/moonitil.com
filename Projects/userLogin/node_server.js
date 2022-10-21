//Setting up the Express Module
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');

// Set up the router
app.use(express.static(path.join(__dirname, 'sources')));

// Server Data
var users = [
    {
        name: "Katherine Marranca",
        username: "moonitil",
        password: "Space7719"
    },
    {
        name: "John Doe",
        username: "Johnny",
        password: "Password123"
    }
]

// Answer "get" on the location "/" (on startup)
router.get(
    '/', 
    function(req, res){
        res.sendFile(path.join(__dirname, "index.html"));
    });

//Answer "get" when "/api/register" is called
router.get(
    '/api/user',
    function(req, res){
        var userMatch = false;

        // Check array data for matching username
        for (var i = 0; i < users.length; ++i) {
            var user = users[i];

            if (user.username == req.query.user){
                userMatch = true;
                break;
            } else {
                userMatch = false;
            }
        }
        res.send(userMatch);
    });

//Answer "login" when "/api/login" is called
router.get(
    '/api/login',
    function(req, res){

    });

app.use('/', router);
app.use('/api/user', router);
app.use('/api/login', router);

let server = app.listen(3000, function(){
console.log('App server is running on port 3000');
console.log('To end, press CTRL+C');
});