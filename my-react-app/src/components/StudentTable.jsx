import React from "react";
import StudentRow from "./studentrow";

function StudentTable({ students, onUpdate }) {
  return (
    <div className="table">
      <div className="table-header">
        <span>Name</span>
        <span>Score</span>
        <span>Status</span>
        <span>Update</span>
      </div>

      {students.map((s, i) => (
        <StudentRow
          key={i}
          index={i}
          student={s}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default StudentTable;