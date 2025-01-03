import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import StudentSchedule from './components/StudentSchedule';
import TeacherSchedule from './components/TeacherSchedule';
import Footer from './components/Footer';
import Login from './components/Login'; 
import AdminPage from './components/AdminPage'; 
import ProfesseurPage from './components/ProfesseurPage'; 
import EtudiantPage from './components/EtudiantPage'; 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <Routes>
        
          <Route path="/" element={<Login />} />

   
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/professeur" element={<ProfesseurPage />} />
          <Route path="/etudiant" element={<EtudiantPage />} />

        
         
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
