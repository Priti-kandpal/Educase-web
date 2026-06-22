function Welcome({ setPage }) {
  return (
    <div className="screen welcome">

      <div>
        <h1>Welcome to PopX</h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <button
          className="btn primary"
          onClick={() => setPage("register")}
        >
          Create Account
        </button>

        <button
          className="btn secondary"
          onClick={() => setPage("login")}
        >
          Already Registered? Login
        </button>
      </div>

    </div>
  );
}

export default Welcome;