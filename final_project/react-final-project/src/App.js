import React, { useState } from 'react';
import './index.css';
import JazzThroughTheAges from './JazzThroughTheAges';
import CulturalReflections from './CulturalReflections';
import JazzToday from './JazzToday';

export default function App() {
  const [selectedSection, setSelectedSection] = useState(
    'Jazz Through the Ages'
  );

  return (
    <div className="App">
      <header className="header">
        {/* Jazz-themed header with logo */}
        <h1 id="big">Impact of Jazz in the Past, Present, and Future</h1>
        {/* Navigation menu */}
        <nav>
          <ul id="nav-text">
            <li onClick={() => setSelectedSection('Jazz Through the Ages')}>
              Jazz Through the Ages
            </li>
            <li onClick={() => setSelectedSection('Cultural Reflections')}>
              Cultural Reflections
            </li>
            <li onClick={() => setSelectedSection('Jazz Today')}>Jazz Today</li>
          </ul>
        </nav>
      </header>


      <main className="main">
        {selectedSection === 'Jazz Through the Ages' && <JazzThroughTheAges />}
        {selectedSection === 'Cultural Reflections' && <CulturalReflections />}
        {selectedSection === 'Jazz Today' && <JazzToday />}
      </main>

      {/* <marquee> */}
      <footer className="footer">Created by Imani Musembi</footer>
      {/* </marquee> */}
    </div>
  );
}
