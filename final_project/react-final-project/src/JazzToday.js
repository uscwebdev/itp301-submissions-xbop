import React from 'react';
import './index.css';
import { useState } from 'react';
import $ from 'jquery';

export default function JazzToday() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  function handleOnSubmit(e) {
    e.preventDefault();

    console.log('form submission');

    $.ajax({
      url: 'GET /database/search?q=' + searchTerm,
      dataType: 'json',
      success: function (data) {
        console.log(data);
        console.log(data.results);
        setResults(data.results);
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  return (
    <section className="content jazz-today">
      {/* <div className="header"> */}
      {/* The same header as the previous pages */}
      {/* <h1>Jazz Today</h1> */}
      {/* Additional header content */}
      {/* </div> */}
      <div className="introduction">
      <a href="https://docs.google.com/document/d/1vP2Y9wBIyorYQeExDFEyNwHwqUSk2Sga5OOUJS-OzmE/edit?usp=sharing"><h2>Jazz Today</h2></a>
        <p id="paragraph">
          Jazz maintains a profound impact on contemporary culture, permeating
          diverse artistic expressions and entertainment realms. This
          exploration delves into the enduring relevance of jazz, elucidating
          its pervasive influence across modern artistic landscapes. As a
          cultural cornerstone, jazz continues to shape and inspire a myriad of
          creative endeavors, reaffirming its timeless significance in today's
          dynamic cultural tapestry.
        </p>
      </div>
      <div className="search-feature">
        <h2>Featured Jazz Media</h2>
        <form className="col-12" id="search-form" onSubmit={handleOnSubmit}>
          <input
            type="text"
            className="form-control"
            id="search-term"
            placeholder="Search for Jazz Media"
            name="searchTerm"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.currentTarget.value);
            }}
          />
          {/* Add a search button */}
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      {/* <h2>Featured Content</h2> */}
      <div className="featured-content">
        <div className="featured-item">
          <h4>Artist</h4>
          <img
            src="https://www.udiscovermusic.com/wp-content/uploads/2021/11/Louis-Armstrong-GettyImages-964102851.jpg"
            alt="Featured Artist"
          />
          {results.map((elt) => {
            console.log(elt);

            return (
              <tr>
                <td>
                  <img
                    src={elt.artworkUrl100}
                    alt={elt.collectionName + ' Cover'}
                  />
                </td>
                <td>{elt.artistName}</td>
                <td>{elt.trackName}</td>
                <td>{elt.collectionName}</td>
                <td>
                  <audio src={elt.previewUrl} controls></audio>
                </td>
              </tr>
            );
          })}
          <p>
            Nicknamed “Satchmo” or “Pops,” New Orleans-born Louis Armstrong was
            one of jazz’s most significant founding fathers and played a
            profoundly influential role in exporting the music to other parts of
            the world. He was not only a brilliant trumpeter who could dazzle
            with his hard-swinging molten improvisations but also an expressive
            jazz singer who possessed a unique, gravel-textured voice. He helped
            to popularize jazz in the 1920s and enjoyed a long and fruitful
            career that saw notable collaborations with Duke Ellington, Ella
            Fitzgerald, Oscar Peterson and Bing Crosby. In 1968, in the twilight
            of his career, he scored a huge international pop hit with “What A
            Wonderful World.”
          </p>
        </div>
        <div className="featured-item">
          <h4>Movie</h4>
          <img
            src="https://static01.nyt.com/images/2020/12/29/arts/29jazz-movies4/29jazz-movies4-videoSixteenByNineJumbo1600.jpg"
            alt="Recent Jazz Movie"
          />
          <h3>Soul</h3>
          <p>
            A pianist and middle-school band teacher, Joe, is on the brink of
            death when his spirit sneaks into the Great Before, where
            uninitiated souls prepare to enter bodies upon birth. There he meets
            22, a recalcitrant soul whom the powers that be have failed to coax
            into a human body.
          </p>
        </div>
        <div className="featured-item">
          <h4>Event</h4>
          <img
            src="https://coalitionrcd.org/wp-content/uploads/2022/05/A8A3675D-62A6-4B2F-AD64-F0AF96068291.jpeg"
            alt="Upcoming Jazz Event"
          />
          <h3>Central Avenue Jazz Festival</h3>
          <p>
            Every summer, CRCD co-hosts the Central Avenue Jazz Festival in
            partnership with Los Angeles City Councilman Curren D. Price, Jr.,
            in the NEW Ninth District. This free event brings live jazz to the
            community all day Saturday and Sunday on the last weekend of July.
            Thousands of Angelenos join the fun to celebrate the legendary jazz
            history of Central Avenue and enjoy a variety of food and art
            vendors. The festival supports our community development and
            workforce development programs that uplift South LA.
          </p>
        </div>
      </div>
    </section>
  );
}
