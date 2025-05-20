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

const allExcuses = () => Object.values(excuses).flat();

function getRandomExcuse(category) {
  const list = category && category !== 'all' ? excuses[category] : allExcuses();
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function App() {
  const [category, setCategory] = React.useState('all');
  const [excuse, setExcuse] = React.useState('');
  const [copied, setCopied] = React.useState(false);

  const generate = () => {
    setExcuse(getRandomExcuse(category));
  };

  const copy = () => {
    navigator.clipboard.writeText(excuse).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <div className="container">
      <h1>Random Excuse Generator</h1>
      <label htmlFor="category">Choose a category:</label>
      <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="work">Work</option>
        <option value="school">School</option>
        <option value="absurd">Absurd</option>
        <option value="tech">Tech</option>
      </select>
      <p id="excuse">{excuse || 'Press the button to get an excuse.'}</p>
      <button onClick={generate}>Generate Excuse</button>
      <button onClick={copy} title="Copy to clipboard">{copied ? 'Copied!' : 'Copy'}</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
