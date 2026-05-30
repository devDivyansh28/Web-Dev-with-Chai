// State & useState
// State is data that changes over time. When state changes, React re-renders the component to reflect the new data.

// How useState Works
// const [count, setCount] = useState(0);
// //     ^          ^                ^
// //   value    setter fn     initial value
// useState returns an array: [currentValue, setterFunction]
// Calling the setter triggers a re-render
// Never modify state directly — always use the setter
// Your Task
// Build a counter component:

// Initialize a count state to 0 using useState
// Display the count in an <h2> with id "count"
// Add an Increment button (id: "increment") that increases count by 1
// Add a Decrement button (id: "decrement") that decreases count by 1
// Add a Reset button (id: "reset") that sets count back to 0

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 id="count">Count: {count}</h2>
      <button id="increment" onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button id="decrement" onClick={() => setCount((prev) => prev - 1)}>
        Decrement
      </button>
      <button id="reset" onClick={() => setCount}>
        Decrement
      </button>
    </div>
  );
}