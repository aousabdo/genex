const excuses = {
  work: [
    "The meeting was moved to Mars",
    "My boss said I could take a day off for science",
    "I had to attend a top secret briefing about coffee supplies"
  ],
  school: [
    "My homework was eaten by a cyber-dragon",
    "I accidentally studied last year's syllabus",
    "I couldn't log in because my password escaped"
  ],
  absurd: [
    "A band of ninjas kidnapped my lunch",
    "My evil twin did it, not me",
    "I turned invisible and couldn't find myself"
  ],
  tech: [
    "My smart fridge needed a software update",
    "The cloud was actually raining inside my router",
    "I was busy teaching my toaster to sing"
  ]
};

function allExcuses() {
  return Object.values(excuses).flat();
}

function getRandomExcuse(category) {
  const list = category && category !== 'all' ? excuses[category] || [] : allExcuses();
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

document.getElementById('generate').addEventListener('click', () => {
  const category = document.getElementById('category').value;
  const excuse = getRandomExcuse(category);
  document.getElementById('excuse').innerText = excuse;
});

document.getElementById('copy').addEventListener('click', () => {
  const excuse = document.getElementById('excuse').innerText;
  navigator.clipboard.writeText(excuse).then(() => {
    const btn = document.getElementById('copy');
    btn.innerText = 'Copied!';
    setTimeout(() => (btn.innerText = 'Copy'), 1000);
  });
});
