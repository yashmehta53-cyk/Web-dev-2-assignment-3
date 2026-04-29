import React, { useState } from "react";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = () => {
    onAdd(name, score);
    setName("");
    setScore("");
  };

  return (
    <div className="form">
      <input
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Score (0-100)"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        type="number"
      />

      <button onClick={handleSubmit}>+ ADD</button>
    </div>
  );
}

export default AddStudentForm;