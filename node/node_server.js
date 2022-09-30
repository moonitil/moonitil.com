//Setting up the Express Module
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');

// Set up the router
app.use(express.static(path.join(__dirname, 'public')));

// Server Data
var reviews = [
    {    
       id: 1,
       name: "John Doe",
       job: "Backend Developer",
       rating: "☆☆☆☆☆",
       review: "This is John's review. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus fugit soluta culpa natus totam. Est molestiae, incidunt officia cupiditate ex pariatur eaque vel laborum corporis provident et nemo eveniet molestias!"
    },
    {
        id: 2,
        name: "Jill Green",
        job: "UI Designer",
        rating: "☆☆",
        review: "This is Jill's review. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus fugit soluta culpa natus totam. Est molestiae, incidunt officia cupiditate ex pariatur eaque vel laborum corporis provident et nemo eveniet molestias!"

    },
    {
        id: 3,
        name: "Katherine Marranca",
        job: "Student",
        rating: "☆☆☆",
        review: "This is Katherine's review. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus fugit soluta culpa natus totam. Est molestiae, incidunt officia cupiditate ex pariatur eaque vel laborum corporis provident et nemo eveniet molestias!"
    },
];

// Answer "get" on the location "/"
router.get(
                '/', 
                function(req, res){
                    res.sendFile(path.join(__dirname, "reviews.html"));
                });
app.use('/', router);

//Answer "get" when "api/reviews" is called
router.get(
                '/api/reviews',
                function(req, res){
                    let currentIndex = Math.floor(Math.random() * reviews.length);
                    res.send(reviews[currentIndex]); 
                });

let server = app.listen(3000, function(){
    console.log('App server is running on port 3000');
    console.log('To end, press CTRL+C');
});