
const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh"
  },
  {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier"
  }
];

let previousIndex = -1;

function showRandomQuote() {
  let index;

  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (quotes.length > 1 && index === previousIndex);

  previousIndex = index;

  document.getElementById("quote").textContent =
    '"' + quotes[index].text + '"';

  document.getElementById("author").textContent =
    "— " + quotes[index].author;
}

document.getElementById("newQuote").addEventListener(
  "click",
  showRandomQuote
);

// Show a quote when the app opens
showRandomQuote();
