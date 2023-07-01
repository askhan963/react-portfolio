import "./FormStyles.css"
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required!');
    } else {
      alert(`Message submitted! \n Name: ${name} \n Email: ${email} \n Message: ${message}`);
      setName("");
      setEmail("");
      setMessage("");
      setError(null);
    }
  };

  return (
    <div className="contact-form">
        <h2>Submit the Message and I will reach to you...</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            className="form-control"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            className="form-control"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea 
            className="form-control"
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
