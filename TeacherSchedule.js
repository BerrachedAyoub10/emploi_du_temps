import React, { useState } from 'react';
import './TeacherSchedule.css';

const teachers = [
  'Prof. Mohammed',
  'Prof. Othmane',
  'Prof. Ayoub',
  'Prof. Lahcen',
  'Prof. Khalil',
  'Prof. Boukraa',
  'Prof. Yassine',
  'Prof. Kerdadach',
  'Prof. Merini',
  'Prof. zerouri'
];

const groups = [
  'TC-1', 'TC-2', 'TC-3', 'TC-4', 'TC-5', 'TC-6', 'TC-7', 'TC-8',
  '1BAC-1', '1BAC-2', '1BAC-3', '1BAC-4', '1BAC-5', '1BAC-6', '1BAC-7', '1BAC-8',
  '2BAC-1', '2BAC-2', '2BAC-3', '2BAC-4', '2BAC-5', '2BAC-6', '2BAC-7', '2BAC-8'
];

const generateSchedule = () => {
  const schedule = {};
  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  const heures = ['8h30-10h30', '10h30-12h30', '14h30-16h30', '16h30-18h30'];

  teachers.forEach(teacher => {
    schedule[teacher] = {};
    days.forEach(day => {
      schedule[teacher][day] = { matin: [], apresMidi: [] };
      heures.forEach((heure, index) => {
        const randomNoClassHours = getRandomNoClassHours(10, days.length * heures.length);
        if (randomNoClassHours.includes(index + days.indexOf(day) * heures.length)) {
          schedule[teacher][day].matin.push('-');
          schedule[teacher][day].apresMidi.push('-');
        } else {
          const group = groups[Math.floor(Math.random() * groups.length)];
          if (index < 2) {
            schedule[teacher][day].matin.push(group);
          } else {
            schedule[teacher][day].apresMidi.push(group);
          }
        }
      });
    });
  });

  return schedule;
};

const getRandomNoClassHours = (count, max) => {
  const noClassHours = new Set();
  while (noClassHours.size < count) {
    noClassHours.add(Math.floor(Math.random() * max));
  }
  return Array.from(noClassHours);
};

const teacherSchedules = generateSchedule();

function TeacherSchedule() {
  const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);

  const handleChange = (e) => {
    setSelectedTeacher(e.target.value);
  };

  const scheduleData = teacherSchedules[selectedTeacher];
  const heures = ['8h30-10h30', '10h30-12h30', '14h30-16h30', '16h30-18h30'];
  const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];

  return (
    <div className="schedule-container">
      <h2 className="text-center">Emploi du Temps des Professeurs</h2>
      <div className="form-group">
        <label htmlFor="teacherSelect">Choisissez un professeur:</label>
        <select
          id="teacherSelect"
          className="form-control"
          value={selectedTeacher}
          onChange={handleChange}
        >
          {teachers.map((teacher, index) => (
            <option key={index} value={teacher}>{teacher}</option>
          ))}
        </select>
      </div>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Heures/Jours</th>
            {jours.map((jour, index) => (
              <th key={index}>{jour.charAt(0).toUpperCase() + jour.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {heures.map((heure, hIndex) => (
            <tr key={hIndex}>
              <td>{heure}</td>
              {jours.map((jour, jIndex) => (
                <td key={jIndex}>
                  {hIndex < 2 ? scheduleData[jour].matin[hIndex] : scheduleData[jour].apresMidi[hIndex - 2] || 'Pas de cours'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherSchedule;
