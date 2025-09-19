import React, { useState } from 'react';

function AppTest() {
  const [count, setCount] = useState(0);
  const [section, setSection] = useState('home');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Test - Is it Interactive?</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px', marginRight: '10px', cursor: 'pointer' }}
        >
          Count: {count}
        </button>
        
        <button 
          onClick={() => alert('Button clicked!')}
          style={{ padding: '10px', cursor: 'pointer' }}
        >
          Test Alert
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSection('home')} style={{ marginRight: '10px' }}>Home</button>
        <button onClick={() => setSection('about')} style={{ marginRight: '10px' }}>About</button>
        <button onClick={() => setSection('contact')}>Contact</button>
      </div>

      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        {section === 'home' && <div>Home Section</div>}
        {section === 'about' && <div>About Section</div>}
        {section === 'contact' && <div>Contact Section</div>}
      </div>
    </div>
  );
}

export default AppTest;