import React, { useState } from 'react';
import './ProfesseurPage.css';

function ProfesseurPage() {

  const teacherSchedule = [
    { day: 'Monday', subject: 'Math', time: '09:00 - 10:00' },
    { day: 'Tuesday', subject: 'Math', time: '10:30 - 11:30' },
    { day: 'Wednesday', subject: 'Math', time: '12:00 - 13:00' },
  ];

  const students = [
    { id: 1, name: 'Ali Zain', group: 'Group A' },
    { id: 2, name: 'Laila Ahmed', group: 'Group B' },
    { id: 3, name: 'Omar Khalid', group: 'Group A' },
    { id: 4, name: 'zayed abar', group: 'Group A' },
    { id: 5, name: 'karim baz', group: 'Group B' },
    { id: 6, name: 'samir yasor', group: 'Group A' },
    { id: 7, name: 'amine lalala', group: 'Group A' },
    { id: 8, name: 'salma bardad', group: 'Group B' },
    { id: 9, name: 'sofia karas', group: 'Group A' },
  ];

  const [showStudents, setShowStudents] = useState(false);

  return (
    <div className="professeur-page">
      <h1>Bienvenue Prof. Lahcen!</h1>
      <p>Below is your personal schedule and tools to view student details.</p>

     
      <div className="professeur-section">
        <h2>Your Schedule</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Subject</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {teacherSchedule.map((entry, index) => (
              <tr key={index}>
                <td>{entry.day}</td>
                <td>{entry.subject}</td>
                <td>{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <button className="professeur-button" onClick={() => setShowStudents(!showStudents)}>
        {showStudents ? 'Hide Student List' : 'View Student List'}
      </button>

   
      {showStudents && (
        <div className="professeur-section">
          <h2>Students List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Group</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.group}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProfesseurPage;
