import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home">
        <h2>Bienvenue sur le site d'emploi du temps de notre école</h2>
        <p>Consultez facilement les emplois du temps des étudiants et des professeurs.</p>
      </header>

      <section className="announcements ">
        <h3>Dernières annonces</h3>
        <ul>
          <li>Réunion des parents d'élèves le 01 janvier à 18h.</li>
          <li>Examen de mi-semestre prévu pour la semaine prochaine.</li>
          <li>Atelier de développement personnel le 09 janvier.</li>
        </ul>
      </section>

      <section className="emplois">
        <h3>Liens utiles</h3>
        <ul>
          <li><a href="/students">Emploi du temps des étudiants</a></li>
          <li><a href="/teachers">Emploi du temps des professeurs</a></li>
        </ul>
      </section>

      <section className="about">
        <h3>À propos de notre école</h3>
        <p>
          Notre école est dédiée à fournir une éducation de qualité dans un environnement inclusif et stimulant. Nous
          offrons une variété de programmes académiques pour aider nos étudiants à atteindre leurs objectifs éducatifs et professionnels.
        </p>
      </section>
    </div>
  );
}

export default Home;
