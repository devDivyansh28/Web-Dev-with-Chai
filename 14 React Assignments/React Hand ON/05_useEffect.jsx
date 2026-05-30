// useEffect & Lifecycle
// useEffect lets you run side effects — things that happen outside of rendering, like updating the document title, setting up timers, or fetching data.

// How It Works
// // Runs after every render
// useEffect(() => { ... });

// // Runs only on mount (empty deps)
// useEffect(() => { ... }, []);

// // Runs when "count" changes
// useEffect(() => { ... }, [count]);

// // Cleanup function (runs before next effect or unmount)
// useEffect(() => {
//   const timer = setInterval(...);
//   return () => clearInterval(timer); // cleanup
// }, []);
// Your Task
// Create a counter with useState, starting at 0
// Display it in <h2 id="count">
// Use useEffect to update document.title to "Count: X" whenever count changes
// Add an Increment button with id "increment"
// Display a message <p id="mounted"> that says "Component is mounted!" — set this text using useEffect with an empty dependency array and a state variable
// Note: The document title won't be visible in the preview, but the tests will check it!

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