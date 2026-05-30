// Conditional Rendering
// React doesn't have special directives like v-if. Instead, you use plain JavaScript:

// Patterns
// // Ternary
// {isLoggedIn ? <Dashboard /> : <LoginForm />}

// // && short-circuit (render or nothing)
// {showBanner && <Banner />}

// // Early return
// if (isLoading) return <Spinner />;
// Your Task
// Build a login/logout toggle:

// Track isLoggedIn state, starting as false
// When logged out:
// Show <p id="status"> with text "Please log in"
// Show a button with id "login-btn" and text "Log In"
// When logged in:
// Show <p id="status"> with text "Welcome back!"
// Show a button with id "logout-btn" and text "Log Out"
// Add a <span id="badge"> that only appears when logged in, containing "Online"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function LoggedIn() {
    return (
      <>
        <p id="status">Welcome back!</p>
        <button id="logout-btn" onClick={() => setIsLoggedIn(false)}>
          Log Out
        </button>
        <span id="badge">Online</span>
      </>
    );
  }

  function LoggedOut() {
    return (
      <>
        <p id="status">Please log in</p>
        <button id="login-btn" onClick={() => setIsLoggedIn(true)}>
          Log In
        </button>
      </>
    );
  }

  return <div>{isLoggedIn ? <LoggedIn /> : <LoggedOut />}</div>;
}