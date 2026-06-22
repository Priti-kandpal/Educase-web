import { useState } from "react";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [page, setPage] = useState("welcome");

  const [user, setUser] = useState({
    name: "Marry Doe",
    email: "marrydoe@gmail.com",
  });

  return (
    <div className="app">
      <div className="phone">

        {page === "welcome" && (
          <Welcome setPage={setPage} />
        )}

        {page === "login" && (
          <Login
            setPage={setPage}
            setUser={setUser}
          />
        )}

        {page === "register" && (
          <Register
            setPage={setPage}
            setUser={setUser}
          />
        )}

        {page === "profile" && (
          <Profile
            user={user}
            setPage={setPage}
          />
        )}

      </div>
    </div>
  );
}

export default App;