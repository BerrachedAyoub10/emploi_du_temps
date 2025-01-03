import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const users = {
  Admin: [
    { email: 'hakim@example.com', password: 'hakim123', name: 'Mr. Hakim' },
    { email: 'badiaa@example.com', password: 'badiaa123', name: 'Mme. Badiaa' },
    { email: 'sadqi@example.com', password: 'sadqi123', name: 'Mr. Sadqi' },
  ],
  Professeur: [
    { email: 'Lahcen@example.com', password: 'lahcen123', name: 'Prof. Lahcen' },
    { email: 'khalil@example.com', password: 'khalil123', name: 'Prof. Khalil' },
    { email:'zrouri@example.com', password: 'zrouri123', name: 'Prof. zerouri' },
    { email: 'kerdadach@example.com', password: 'kardadech123', name: 'Prof. Kerdadach' },
    { email: 'Merini@example.com', password: 'merini123', name: 'Prof. Merini'},
    { email: 'fares@example.com', password: 'fares123', name: 'Prof. fares' },
  ],
 Etudiant : [
    
    { name: 'Ali Zain', group: 'Group A', email: 'ali.zain@example.com', password: 'alizain123' },
    {name: 'Omar Khalid', group: 'Group A', email: 'omar.khalid@edu.org', password: 'omar234' },
    { name: 'zayed abar', group: 'Group A', email: 'zayed.abar@edu.org', password: 'ua2zP3vc' },
    { name: 'karim baz', group: 'Group B', email: 'karim.baz@school.com', password: 'xx3JugEd' },
    { name: 'samir yasor', group: 'Group A', email: 'samir.yasor@edu.org', password: '7vdA83Xs' },
    {  name: 'amine lalala', group: 'Group A', email: 'amine.lalala@school.com', password: 'UovBj8Mg' },
    { name: 'salma bardad', group: 'Group B', email: 'salma.bardad@edu.org', password: 'tOvkAxpH' },
    {  name: 'sofia karas', group: 'Group A', email: 'sofia.karas@edu.org', password: 'cfNDNFrC' },
  ],
  
};

function Login() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [userName, setUserName] = useState('');
  const isLogin = localStorage.getItem('conected')
  const navigate = useNavigate(); 

  useEffect(() => {
    if(isLogin){
      navigate('/admin')
    }
  },[isLogin])
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setEmail('');
    setPassword('');
    setLoginError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users[selectedRole].find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('conected','true')
      setUserName(user.name);
      setLoginError(null);
    
      if (selectedRole === 'Admin') {
        navigate('/admin');
      } else if (selectedRole === 'Professeur') {
        navigate('/professeur');
      } else if (selectedRole === 'Etudiant') {
        navigate('/etudiant');
      }
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="cube">
        <h2>Login</h2>
        {selectedRole === null ? (
          <div className="role-selection">
            <button onClick={() => handleRoleSelect('Admin')}>Admin</button>
            <button onClick={() => handleRoleSelect('Professeur')}>Professeur</button>
            <button onClick={() => handleRoleSelect('Etudiant')}>Étudiant</button>
          </div>
        ) : (
          <div className="form-container">
            <h3>Welcome, {selectedRole}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
            {loginError && <p className="error">{loginError}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
