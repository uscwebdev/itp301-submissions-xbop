import React, { useState } from 'react';
import './index.css';

export default function JazzThroughTheAges() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const timelineData = [
    {
      year: '1920s',
      event: 'Birth of Jazz',
      description:
        'With its origins in the African American community, jazz became a voice of resilience and freedom, echoing the experiences and struggles of its creators. From the raw, improvised tunes in the smoky clubs of New Orleans to the swing era that swept the nation in the 1930s and the bebop innovations of the 1940s, jazz has constantly evolved, embracing diverse influences and pushing artistic boundaries.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/26/CarterAndKingJazzingOrchestra.jpg',
    },
    {
      year: '1930s',
      event: 'Swing Era',
      description:
        'The Swing Era, predominant in the 1930s and early 1940s, marked a period of immense popularity and widespread appeal for jazz music. Characterized by its lively rhythms and big band orchestration, swing music became the heartbeat of dance halls across America. The era showcased iconic bandleaders like Duke Ellington, Benny Goodman, and Count Basie, whose orchestras epitomized the swinging, rhythmic style. The music is infectious energy and danceable beats made it a cultural phenomenon, influencing not just music but also fashion and social dynamics during its peak.',
      image:
        'https://cdn.britannica.com/73/201073-050-7A256B9D/big-band-jazz-greats-Duke-Ellington-Otto.jpg',
    },
    {
      year: '1940s',
      event: 'Bebop Emerges',
      description:
        'Bebop emerged in the mid-1940s as a revolutionary movement within jazz. It represented a departure from the big band sound of the Swing Era, focusing instead on small ensembles and complex improvisation. Musicians like Charlie Parker, Dizzy Gillespie, and Thelonious Monk were pioneers of this genre, introducing intricate melodies, faster tempos, and sophisticated harmonies. Bebop encouraged virtuosity and pushed the boundaries of jazz, appealing to serious listeners and fellow musicians. Its emphasis on improvisation and technical skill laid the foundation for subsequent jazz innovations.',
      image:
        'https://www.sfjazz.org/globalassets/discover/blog/blog-images/birdmiles5050callout.jpg',
    },
    {
      year: '1950s',
      event: 'Post-War Jazz',
      description:
        'The 1950s saw jazz adapting to the post-war cultural landscape. This era was marked by various stylistic shifts and subgenres emerging from bebop, including hard bop, modal jazz, and cool jazz. Musicians like Miles Davis, John Coltrane, and Thelonious Monk continued to redefine jazz, exploring new harmonies, structures, and tonalities. The decade witnessed an evolution in recording technologies and the rise of LP albums, allowing for longer improvisations and creative freedom.',
      image:
        'https://www.nationalww2museum.org/sites/default/files/2021-09/Thelonious%20Monk_Howard%20McGhee_Roy%20Eldridge_Teddy%20Hill_1947%20-%20William%20P.%20Gottlieb%2006201.jpg',
    },
    {
      year: '1960s-1970s',
      event: 'Jazz Fusion',
      description:
        'The Fusion Era of the 1960s and 1970s blended jazz with elements of rock, funk, and electronic music. Pioneered by artists like Miles Davis with his albums "Bitches Brew" and "In a Silent Way," jazz fusion broke traditional genre boundaries, embracing electric instruments, synthesizers, and experimental compositions. This era attracted both jazz enthusiasts and a broader audience, contributing to the continued evolution of jazz and its influence on contemporary music.',
      image:
        'https://www.culturesonar.com/wp-content/uploads/2017/08/weather-report-PD-600x400.jpg',
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="content jazz-through-the-ages">
      <div className="timeline">
        <a href="https://docs.google.com/document/d/1vP2Y9wBIyorYQeExDFEyNwHwqUSk2Sga5OOUJS-OzmE/edit?usp=sharing">
          <h2>Interactive Timeline</h2>
        </a>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div
                className="timeline-year"
                onClick={() => handleEventClick(item)}
              >
                {item.year}
              </div>
              <div
                className="timeline-event"
                onClick={() => handleEventClick(item)}
              >
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedEvent && (
        <div className="event-details">
          <div className="event-details-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <div className="info-details">
              <h3>{selectedEvent.event}</h3>
              <img
                id="info-img"
                src={selectedEvent.image}
                alt={selectedEvent.event}
              />
              <p>{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
