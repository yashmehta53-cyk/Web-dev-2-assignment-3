import React, { useState } from "react";

function StudentRow({ student, index, onUpdate }) {
  const [value, setValue] = useState(student.score);

  const isPass = student.score >= 40;

  return (
    <div className="row">
      <span>{student.name}</span>
      <span className="score">{student.score}</span>

      <span className={isPass ? "pass" : "fail"}>
        {isPass ? "PASS" : "FAIL"}
      </span>

      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => onUpdate(index, value)}>
          SAVE
        </button>
      </div>
    </div>
  );
}

export default StudentRow;