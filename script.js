const excuses = [
  "My dog ate my homework",
  "I thought today was Saturday",
  "My alarm didn't go off",
  "I lost track of time",
  "Aliens abducted my car",
  "The internet went down",
  "I was stuck in traffic",
  "My phone battery died",
  "I had to save the world",
  "My goldfish needed walking"
];

function getRandomExcuse() {
  const index = Math.floor(Math.random() * excuses.length);
  return excuses[index];
}

document.getElementById("generate").addEventListener("click", () => {
  document.getElementById("excuse").innerText = getRandomExcuse();
});
