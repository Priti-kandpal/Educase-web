import { useState } from "react";

function Register({ setPage, setUser }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.password
    ) {
      alert("Please fill all required fields");
      return;
    }

    setUser({
      name: form.name,
      email: form.email,
    });

    setPage("profile");
  };

  return (
    <div className="screen">

      <h2>
        Create your
        <br />
        PopX account
      </h2>

      <input
        className="input"
        name="name"
        placeholder="Full Name *"
        onChange={handleChange}
      />

      <input
        className="input"
        name="phone"
        placeholder="Phone Number *"
        onChange={handleChange}
      />

      <input
        className="input"
        name="email"
        placeholder="Email Address *"
        onChange={handleChange}
      />

      <input
        className="input"
        type="password"
        name="password"
        placeholder="Password *"
        onChange={handleChange}
      />

      <input
        className="input"
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
      />

      <div className="radio">

        <p>Are you an Agency?</p>

        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={form.agency === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={form.agency === "No"}
            onChange={handleChange}
          />
          No
        </label>

      </div>

      <button
        className="btn primary"
        onClick={handleRegister}
      >
        Create Account
      </button>

    </div>
  );
}

export default Register;