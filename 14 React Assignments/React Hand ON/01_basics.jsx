// Forms & Controlled Components
// In React, form elements like <input>, <textarea>, and <select> can be controlled — their value is driven by React state.

// Pattern
// const [name, setName] = useState('');
// <input value={name} onChange={(e) => setName(e.target.value)} />
// Your Task
// Build a registration form:

// A text input for name with id "name-input"
// An email input with id "email-input"
// A <select> for role with id "role-select" and options: "student", "developer", "designer"
// A submit button with id "submit-btn"
// All inputs must be controlled (value + onChange)
// On submit, prevent page reload and show a <div id="summary"> displaying: "Name: [name], Email: [email], Role: [role]"
// The summary should only appear after submission

function App() {
  const year = 2026;

  return (
    <div>
      <h1>"Hello, React!"</h1>
      <p>{year}</p>
      <p className="subtitle">Divyansh!!!</p>
    </div>
  );
}