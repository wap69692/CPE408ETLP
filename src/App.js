import React from 'react';

const App = () => {
  const handleClick = () => {
    alert('Submitted by: Lauren James Josafat');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      {/* Header Section */}
      <header style={{
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
        borderRadius: '10px',
        marginBottom: '20px',
      }}>
        <h1>Lauren James Josafat</h1>
        <p>Welcome to my personal space of achievements and aspirations.</p>
      </header>

      {/* Main Section */}
      <main>
        <h2>Achievements</h2>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          lineHeight: '2',
          color: '#333',
          fontSize: '1.2rem',
        }}>
          <li
            onClick={() => alert('💻 Created innovative React projects like this landing page!')}
            style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
          >
            💻 Created innovative React projects like this landing page!
          </li>
          <li
            onClick={() => alert('🎨 Applied fundamentals of Digital Art in my recent works')}
            style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
          >
            🎨 Applied fundamentals of Digital Art in my recent works
          </li>
          <li
            onClick={() => alert('🛠️ Contributed to HackTheBox challenges and advanced my cybersecurity skills.')}
            style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
          >
            🛠️ Contributed to HackTheBox challenges and advanced my cybersecurity skills.
          </li>
        </ul>

        <button 
          onClick={handleClick} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '20px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4bb3e8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#61dafb'}
        >
          Get Started
        </button>
      </main>

      {/* Footer Section */}
      <footer style={{
        marginTop: '20px',
        color: '#888',
        fontSize: '0.9rem',
        paddingTop: '10px',
        borderTop: '1px solid #ddd',
      }}>
        <p>© 2025 Lauren James Josafat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
