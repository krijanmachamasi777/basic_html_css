let  myjokes = [
  {
    category: "Programming",
    type: "single",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "Real programmers count from 0.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "Why did the developer go broke?",
    delivery: "Because he used up all his cache.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "A programmer's wife tells him: \"Go to the store and get a loaf of bread. If they have eggs, get a dozen.\" He comes home with 13 loaves of bread.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "How many programmers does it take to change a light bulb?",
    delivery: "None. It's a hardware problem.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "In order to understand recursion, you must first understand recursion.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "Why do Java developers wear glasses?",
    delivery: "Because they don't C#.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "// This comment is useless, but the code breaks without it.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "I told my computer I needed a break, and now it won’t stop sending me KitKat ads.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "Why was the JavaScript developer sad?",
    delivery: "Because he didn’t know how to 'null' his feelings.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "Why do Python programmers wear glasses? Because they can't C.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "What is a programmer's favorite hangout place?",
    delivery: "The Foo Bar.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "There are 10 types of people in the world: those who understand binary and those who don't.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "Why was the function so arrogant?",
    delivery: "Because it had too many arguments.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "Debugging: Being the detective in a crime movie where you are also the murderer.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "Why did the database admin leave his wife?",
    delivery: "She had one-to-many relationships.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "I would love to change the world, but they won’t give me the source code.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "Why did the programmer get stuck in the shower?",
    delivery: "The instructions on the shampoo bottle said: Lather, Rinse, Repeat.",
    safe: true
  },
  {
    category: "Programming",
    type: "single",
    joke: "Programmer: A machine that turns coffee into code.",
    safe: true
  },
  {
    category: "Programming",
    type: "twopart",
    setup: "Why don’t programmers like nature?",
    delivery: "Too many bugs.",
    safe: true
  }
]


 
function showRandomJoke() {
  let index = Math.floor(Math.random() * myjokes.length);
  let selected = myjokes[index];
  let jokeDiv = document.getElementById("joke");

  if (selected.type === "single") {
    jokeDiv.innerHTML = selected.joke;
  } else {
    jokeDiv.innerHTML = `<strong>${selected.setup}</strong><br>${selected.delivery}`;
  }
}

document.getElementById("newJoke").addEventListener("click", showRandomJoke);

// Show a joke on page load
showRandomJoke();