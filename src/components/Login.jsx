import { useState } from "react";

function Login({ setPage, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setUser({
      name: email.split("@")[0],
      email,
    });

    setPage("profile");
  };

  return (
    <div className="screen">

      <h2>
        Signin to your
        <br />
        PopX account
      </h2>

      <p className="subtitle">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <input
        className="input"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn gray"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;