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
          <li>💻 Created innovative React projects like this landing page!</li>
          <li>🎨 Applied fundamentals of Digital Art in my recent works</li>
          <li>🛠️ Contributed to HackTheBox challenges and advanced my cybersecurity skills.</li>
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
          }}
        >
          Get Started
        </button>
      </main>
    </div>
  );
};

export default App;
