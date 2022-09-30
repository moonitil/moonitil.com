function loadReview()
{
    //Make AJAX call
    let xhr = new XMLHttpRequest();
    xhr.open("get", "/api/reviews", true);
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

function randomReview(){
   loadReview();
}

loadReview();