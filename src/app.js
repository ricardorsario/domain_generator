window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-domain").innerHTML = generateDomain();
  });
  console.log("This is your new domain!");
};

let generateDomain = () => {
  let pronoun = ["the", "our", "my", "your", "their"];
  let adj = [
    "sexy",
    "smelly",
    "special",
    "sad",
    "happy",
    "delicious",
    "moist",
    "grumpy",
    "horny"
  ];
  let noun = [
    "grandma",
    "dog",
    "friend",
    "cat",
    "squirrel",
    "aitana",
    "platypus"
  ];
  let last = [".com", ".us", ".es", ".eu"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let lastIndex = Math.floor(Math.random() * last.length);

  return (
    pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + last[lastIndex]
  );
};
