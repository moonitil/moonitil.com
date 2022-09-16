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
var currentIndex = Math.floor(Math.random() * reviews.length);

function loadReview()
{
    var revName = document.getElementById("reviewer"),
        revJob = document.getElementById("job"),
        revRating = document.getElementById("rating"),
        revReview = document.getElementById("review");
        

        revName.innerHTML = reviews[currentIndex].name;
        revJob.innerHTML = reviews[currentIndex].job;
        revRating.innerHTML = reviews[currentIndex].rating;
        revReview.innerHTML = reviews[currentIndex].review;
        
}

function nextReview(){
    currentIndex++;
    if( currentIndex >= reviews.length)
        currentIndex = 0;

    loadReview();
}

function prevReview(){
    currentIndex--;
    if( currentIndex < 0)
        currentIndex = reviews.length - 1;
    
    loadReview();
}

function randomReview(){
    currentIndex = Math.floor(Math.random() * reviews.length);

    loadReview();
}

loadReview();