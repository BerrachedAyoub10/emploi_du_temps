import React from 'react';
import './EtudiantPage.css';

function EtudiantPage() {
  const schedule = [
    { day: 'Monday', subject: 'Math', time: '9:00 AM - 11:00 AM' },
    { day: 'Wednesday', subject: 'English', time: '11:00 AM - 1:00 PM' },
    { day: 'Friday', subject: 'Physics', time: '2:00 PM - 4:00 PM' },
  ];

  const groupSchedule = [
    { day: 'Monday', subject: 'Math', time: '9:00 AM - 11:00 AM' },
    { day: 'Wednesday', subject: 'Science', time: '11:00 AM - 1:00 PM' },
    { day: 'Friday', subject: 'History', time: '2:00 PM - 4:00 PM' },
  ];

  return (
    <div className="etudiant-page">
      <h1 className="etudiant-title">Bienvenue, Étudiant!</h1>
      <p className="etudiant-welcome">
        You are logged in as a student. View your personal information, schedule, and group schedule below.
      </p>

      <div className="student-section">
        <h2 className="section-title">My Information</h2>
        <div className="info-card">
          <p><strong>Name:</strong>Ali zain</p>
          <p><strong>Email:</strong> ali.zain@example.com</p>
          <p><strong>Password:</strong> alizain123-</p>
        </div>
      </div>

      <div className="student-section">
        <h2 className="section-title">My Schedule</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Subject</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((entry, index) => (
              <tr key={index}>
                <td>{entry.day}</td>
                <td>{entry.subject}</td>
                <td>{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default EtudiantPage;
