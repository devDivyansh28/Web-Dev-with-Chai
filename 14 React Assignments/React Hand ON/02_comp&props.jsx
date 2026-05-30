// Components & Props
// Components are the building blocks of React. A component is just a function that returns JSX. Props let you pass data from a parent component to a child.

// Key Concepts
// Components must start with an uppercase letter
// Props are passed like HTML attributes: <Greeting name="Alice" />
// Inside the component, access them via the function parameter: function Greeting({ name })
// Props are read-only — never modify them
// Your Task
// Create a UserCard component that accepts name and role props
// Render an <h2> with the name
// Render a <p> with the role
// Wrap both in a <div> with className="user-card"
// In the App component, render two UserCard components:
// One with name "Alice" and role "Developer"
// One with name "Bob" and role "Designer"

// Create your UserCard component here
function UserCard({name,role}){
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <UserCard name="Alice" role="Developer"/>
      <UserCard name="Bob" role="Designer"/>
    </div>
  );
}