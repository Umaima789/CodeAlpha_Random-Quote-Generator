const quotes = [
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  }
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${quote.text}"`;
  document.getElementById("author").textContent = `— ${quote.author}`;
}

function shareQuote() {
  const quoteText = document.getElementById("quote").textContent;
  const authorText = document.getElementById("author").textContent;
  const shareText = `${quoteText} ${authorText}`;
  alert("Share this quote:\n" + shareText);
}

window.onload = newQuote;
