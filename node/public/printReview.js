//Set up params
function randomReview(param){
    loadReview(param);
} 

function prevReview(param){
    loadReview(param);
}

function nextReview(param){
    loadReview(param);
}

// Load review
function loadReview(param)
{
    // console.log(param);
    var params = "direction=" + param;

    // console.log(params);

    //Make AJAX call
    let xhr = new XMLHttpRequest();
    xhr.open("get", "/api/reviews"+"?"+params, true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == xhr.DONE){
            var reviews = JSON.parse(xhr.responseText);
            var revName = document.getElementById("reviewer"),
            revJob = document.getElementById("job"),
            revRating = document.getElementById("rating"),
            revReview = document.getElementById("review");

            revName.innerHTML = reviews.name;
            revJob.innerHTML = reviews.job;
            revRating.innerHTML = reviews.rating;
            revReview.innerHTML = reviews.review;
        }
    };
}

// Have functional by Tuesday
          
// function nextReview(){
//     currentIndex++;
//     if( currentIndex >= reviews.length)
//         currentIndex = 0;

//     loadReview();
// }

// function prevReview(){
//     currentIndex--;
//     if( currentIndex < 0)
//         currentIndex = reviews.length - 1;
    
//     loadReview();
// }


loadReview('random');