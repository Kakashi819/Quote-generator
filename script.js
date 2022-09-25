const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

/* loading function */
function loading(){
  quoteContainer.hidden=true;
  loader.hidden=false;
}

/* complete function */
function complete(){
  loader.hidden=true;
  quoteContainer.hidden=false;
}

let apiQuotes = [];

//function to get new Quotes
function newQuote() {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // console.log();
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  complete();
}

//main function
async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json(); // this is array of objects;
    newQuote();
  } catch (error) {
    // getQuotes();
  }
}

// this function is for tweet our quote
function tweetQuote() {
  const quote = quoteText;
  const author = authorText;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(tweetUrl, "_blank");
}

//Event listner for button's twitter and new Quote
newQuoteBtn.addEventListener("click", getQuotes);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes();
