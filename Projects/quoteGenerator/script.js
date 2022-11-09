// Targeting elements from the DOM
const quoteContainer = document.getElementById('quote_container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new_quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading Spinner
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
  
  // Hide Loading Spinner
  function loadingComplete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show New Quote
function newQuote() {
    // Call loader function
    loading();
    // Pick a random quote from ApiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is null and replace it with "Unknown"
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine the styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long_quote')
    } else {
        quoteText.classList.remove('long_quote')
    }
    // Load Quote, Hide Loader
    quoteText.textContent = quote.text
    // Call loadingComplete function
    loadingComplete();
}

// Get Quotes From API (once)
async function getQuotes() {
    // Call loading function
    loading();
    // Connect to API
    const apiUrl = 'https://type.fit/api/quotes';
    // Fetch API Array and Convert to JSON
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log('no quote', error);
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    // Opens Twitter in New Tab
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
