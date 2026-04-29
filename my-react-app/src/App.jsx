import React, { useState } from "react";
import Header from "./components/header";
import AddStudentForm from "./components/addstudentform";
import StudentTable from "./components/studenttable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { name: "Aman", score: 78 },
    { name: "Riya", score: 45 },
    { name: "Karan", score: 90 },
    { name: "Neha", score: 32 },
  ]);

  const addStudent = (name, score) => {
    if (!name || score === "") return;
    setStudents([...students, { name, score: Number(score) }]);
  };

  const updateScore = (index, newScore) => {
    const updated = [...students];
    updated[index].score = Number(newScore);
    setStudents(updated);
  };

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    total === 0
      ? 0
      : Math.round(
          students.reduce((sum, s) => sum + s.score, 0) / total
        );

  return (
    <div className="app">
      <Header />

      <AddStudentForm onAdd={addStudent} />

      <div className="stats">
        <div className="box">
          <p>Total</p>
          <h2>{total}</h2>
        </div>
        <div className="box">
          <p>Passed</p>
          <h2>{passed}</h2>
        </div>
        <div className="box">
          <p>Avg Score</p>
          <h2>{avg}</h2>
        </div>
      </div>

      <StudentTable
        students={students}
        onUpdate={updateScore}
      />
    </div>
  );
}

export default App;