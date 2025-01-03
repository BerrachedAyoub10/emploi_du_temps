import React, { useState } from 'react';
import './AdminPage.css';

function AdminPage() {

  const [announcements, setAnnouncements] = useState([
    'Exam schedule will be announced soon.',
    'Sports Day next Friday!',
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: 'Ali Zain', group: 'Group A', email: 'ali.zain@example.com' },
    { id: 2, name: 'Laila Ahmed', group: 'Group B', email: 'laila.ahmed@example.com' },
    { id: 3, name: 'Omar Khalid', group: 'Group A', email: 'omar.khalid@example.com' },
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Prof. Lahcen', subject: 'Math', email: 'lahcen@example.com' },
    { id: 2, name: 'Prof. Sana', subject: 'Science', email: 'sana@example.com' },
    { id: 3, name: 'Prof. Tariq', subject: 'History', email: 'tariq@example.com' },
  ]);

  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const schedules = {
    'Group A': [
      { day: 'Monday', subject: 'Math', time: '09:00 - 10:00' },
      { day: 'Monday', subject: 'Science', time: '10:30 - 11:30' },
      { day: 'Tuesday', subject: 'History', time: '12:00 - 13:00' },
    ],
    'Group B': [
      { day: 'Wednesday', subject: 'Physics', time: '09:00 - 10:00' },
      { day: 'Wednesday', subject: 'Chemistry', time: '10:30 - 11:30' },
      { day: 'Thursday', subject: 'Biology', time: '12:00 - 13:00' },
    ],
  };


  const viewGroupSchedule = (group) => {
    setSelectedSchedule(schedules[group]);
  };

  const closeSchedule = () => {
    setSelectedSchedule(null);
  };

  return (
    <div className="admin-page">
      <h1>Bienvenue Admin </h1>
      <p>You are logged in as an Admin. Here you can modify announcements, manage students and teachers, and more.</p>

    
      <div className="admin-section">
        <h2>Manage Announcements</h2>
        <ul>
          {announcements.map((announcement, index) => (
            <li key={index}>
              {announcement}
              <button className="admin-button" onClick={() => setAnnouncements(announcements.filter((_, i) => i !== index))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button className="admin-button" onClick={() => setAnnouncements([...announcements, prompt('Enter a new announcement:')])}>
          Add Announcement
        </button>
      </div>

     
      <div className="admin-section">
        <h2>Manage Students</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Group</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.group}</td>
                <td>{student.email}</td>
                <td>
                  <button className="admin-button" onClick={() => viewGroupSchedule(student.group)}>
                    View Schedule
                  </button>
                  <button className="admin-button" onClick={() => setStudents(students.filter((s) => s.id !== student.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="admin-button" onClick={() => setStudents([...students, { id: students.length + 1, name: prompt('Enter name:'), group: prompt('Enter group:'), email: prompt('Enter email:') }])}>
          Add Student
        </button>
      </div>

      <div className="admin-section">
        <h2>Manage Teachers</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.email}</td>
                <td>
                  <button className="admin-button" onClick={() => setTeachers(teachers.filter((t) => t.id !== teacher.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="admin-button"
          onClick={() =>
            setTeachers([...teachers, { id: teachers.length + 1, name: prompt('Enter name:'), subject: prompt('Enter subject:'), email: prompt('Enter email:') }])
          }
        >
          Add Teacher
        </button>
      </div>

  
      {selectedSchedule && (
        <div className="schedule-modal">
          <h3>Group Schedule</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Subject</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {selectedSchedule.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.day}</td>
                  <td>{entry.subject}</td>
                  <td>{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="admin-button" onClick={closeSchedule}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
