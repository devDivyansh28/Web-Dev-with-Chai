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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted((prev) => !prev);
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <input
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <select id="role-select" value={role}>
          <option>student</option>
          <option>developer</option>
          <option>designer</option>
        </select>
        <button id="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {submitted && (
        <div id="summary">
          Name:{name},Email:{email},Role:{role}
        </div>
      )}
    </>
  );
}