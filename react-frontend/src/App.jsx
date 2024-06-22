import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Users/Dashboard';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const tokendata = localStorage.getItem('token');
    if (tokendata) {
      setToken(tokendata);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {token ? (
            <>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </>
          )}
          {/* Fallback route to handle unknown paths */}
          <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
