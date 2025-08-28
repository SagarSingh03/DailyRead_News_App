import React, { useState } from "react";
import "./SignUp.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

function SignUp() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");      

  const createUser = async (e) => {
    e.preventDefault(); // prevent page reload
    setLoading(true);
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account created successfully!");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="signup-form" onSubmit={createUser}>
      <div className="mb-3">
        <label htmlFor="signupEmail" className="form-label">Email address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="signupEmail"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="signupPassword" className="form-label">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="signupPassword"
          minLength={6}
          required
        />
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="termsCheck" required />
        <label className="form-check-label" htmlFor="termsCheck">
          Accept Terms & Conditions
        </label>
      </div>

      {error && <p className="text-danger">{error}</p>} 
      {loading ? (
        <button className="btn btn-primary" disabled>Creating...</button>
      ) : (
        <button type="submit" className="btn btn-primary">Sign Up</button>
      )}
    </form>
  );
}

export default SignUp;
