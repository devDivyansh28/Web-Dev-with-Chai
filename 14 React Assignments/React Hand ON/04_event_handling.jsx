// Event Handling
// React events are named using camelCase: onClick, onChange, onSubmit. You pass a function as the handler, not a string.

// Key Patterns
// // Inline handler
// <button onClick={() => alert('clicked!')}>Click</button>

// // Named handler
// function handleClick() { alert('clicked!'); }
// <button onClick={handleClick}>Click</button>

// // With event object
// <input onChange={(e) => setValue(e.target.value)} />
// Your Task
// Build a simple item list:

// Create an input with id "item-input" for typing items
// Track the input value in state
// Add a button with id "add-btn" that adds the input text to a list
// After adding, clear the input
// Render the list as <ul id="item-list"> with <li> elements
// // Each <li> should display the item text

function App() {
  const [count, setCount] = useState(0);
  const [mountMsg, setMountMsg] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  useEffect(() => setMountMsg("Component is mounted!"));

  return (
    <div>
      <h2 id="count">Count: {count}</h2>
      <button id="increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p id="mounted">{mountMsg}</p>
    </div>
  );
}