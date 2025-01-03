import React, { useState } from 'react';
import './StudentSchedule.css';

const years = ['Tronc commun', '1BAC', '2BAC'];
const groups = ['Groupe 1', 'Groupe 2', 'Groupe 3', 'Groupe 4', 'Groupe 5', 'Groupe 6', 'Groupe 7', 'Groupe 8'];

const generateSchedule = () => {
  const schedule = {};
  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  const heures = ['8h30-10h30', '10h30-12h30', '14h30-16h30', '16h30-18h30'];

  years.forEach(year => {
    schedule[year] = {};
    groups.forEach(group => {
      schedule[year][group] = {};
      days.forEach(day => {
        schedule[year][group][day] = { matin: [], apresMidi: [] };
        heures.forEach(() => {
          
          const random = Math.random();
          if (random < 0.3) {
            schedule[year][group][day].matin.push('-');
            schedule[year][group][day].apresMidi.push('-');
          } else {
            const subject = getRandomSubject();
            schedule[year][group][day].matin.push(subject);
            schedule[year][group][day].apresMidi.push(subject);
          }
        });
      });
    });
  });

  return schedule;
};

const getRandomSubject = () => {
  const subjects = ['Mathématiques', 'Physique', 'Chimie', 'Biologie', 'Histoire', 'Géographie', 'Français', 'Anglais', 'Phylosophie', 'Science de vie et de terre', 'Sport', 'Education Ismaùique'];
  return subjects[Math.floor(Math.random() * subjects.length)];
};

const studentSchedules = generateSchedule();

function StudentSchedule() {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  };

  const scheduleData = studentSchedules[selectedYear][selectedGroup];
  const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  const heures = ['8h30-10h30', '10h30-12h30', '14h30-16h30', '16h30-18h30'];

  return (
    <div className="schedule-container">
      <h2 className="text-center">Emploi du Temps des Étudiants</h2>
      <div className="filters">
        <div className="form-group">
          <label htmlFor="yearSelect">Année :</label>
          <select
            id="yearSelect"
            className="form-control"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="groupSelect">Groupe :</label>
          <select
            id="groupSelect"
            className="form-control"
            value={selectedGroup}
            onChange={handleGroupChange}
          >
            {groups.map((group, index) => (
              <option key={index} value={group}>{group}</option>
            ))}
          </select>
        </div>
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
                  {scheduleData[jour].matin[hIndex]}
                </td>
              ))}
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default StudentSchedule;
