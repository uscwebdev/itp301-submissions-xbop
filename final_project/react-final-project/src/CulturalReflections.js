import React from 'react';
import { useState } from 'react';
import './index.css';

export default function CulturalReflections() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <section className="content cultural-reflections">
      <div className="interactive-elements">
        <a href="https://docs.google.com/document/d/1vP2Y9wBIyorYQeExDFEyNwHwqUSk2Sga5OOUJS-OzmE/edit?usp=sharing">
          <h2>Cultural Reflections</h2>
        </a>
        <form>
          {/* Question 1 */}
          <p>Do you believe jazz has faced cultural appropriation?</p>
          <div className="align-middle form-check form-check-inline label-spacing">
            <input
              className="form-check-input"
              type="radio"
              id="appropriation-yes"
              name="appropriation"
              value="yes"
            />
            <label
              className="form-check-label my-1"
              htmlFor="appropriation-yes"
            >
              Yes
            </label>
          </div>
          <div className="align-middle form-check form-check-inline label-spacing">
            <input
              className="form-check-input"
              // checked={selectedOption === 'yes'}
              type="radio"
              id="appropriation-no"
              name="appropriation"
              value="no"
            />
            <label className="form-check-label my-1" htmlFor="appropriation-no">
              No
            </label>
          </div>

          {/* Question 2 */}
          <p>
            Do you think it's important to acknowledge the cultural roots of
            jazz when appreciating the music?
          </p>
          <div className="align-middle form-check form-check-inline">
            <input
              className="form-check-input"
              // checked={selectedOption === 'yes'}
              type="radio"
              id="acknowledge-yes"
              name="acknowledge"
              value="yes"
            />
            <label className="form-check-label my-1" htmlFor="acknowledge-yes">
              Yes
            </label>
          </div>
          <div className="align-middle form-check form-check-inline label-spacing">
            <input
              className="form-check-input"
              type="radio"
              id="acknowledge-no"
              // checked={selectedOption === 'yes'}
              name="acknowledge"
              value="no"
            />
            <label className="form-check-label my-1" htmlFor="acknowledge-no">
              No
            </label>
          </div>

          {/* Question 3 */}
          <p>
            Should jazz education programs emphasize the cultural origins of the
            music?
          </p>
          <div className="align-middle form-check form-check-inline label-spacing">
            <input
              className="form-check-input"
              type="radio"
              id="emphasis-yes"
              name="emphasis"
              value="yes"
            />
            <label className="form-check-label my-1" htmlFor="emphasis-yes">
              Yes
            </label>
          </div>
          <div className="align-middle form-check form-check-inline label-spacing">
            <input
              className="form-check-input"
              type="radio"
              id="emphasis-no"
              name="emphasis"
              value="no"
            />
            <label className="form-check-label my-1" htmlFor="emphasis-no">
              No
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="discussion">
        <h2>Discussion</h2>
        <div id="appropriation-img-container">
          <img
            id="appropriation-img"
            src="https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2020/10/BlackMusic_Kai.jpg?fit=720%2C576&ssl=1"
            alt="Cultural Appropriation in Jazz"
          />
        </div>
        <p>
          Cultural appropriation in jazz has been a topic of debate for decades.
          It involves the adoption of certain elements of jazz by mainstream
          culture without acknowledgment or respect for its origins. This often
          leads to erasure or misrepresentation of the cultural significance and
          contributions of the African American community to jazz. Images and
          stories related to instances of cultural appropriation can be explored
          here.
        </p>
        {/* Additional content regarding cultural appropriation */}
      </div>
      <div className="user-comments">
        <h2>User Comments</h2>
        <textarea
          placeholder="Share your thoughts..."
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button type="submit">Post Comment</button>
        {/* Display existing user comments */}
        {/* <div className="comment">
          <p>User comment regarding cultural appropriation...</p>
        </div> */}
        {/* More user comments or a scrollable area */}
      </div>
    </section>
  );
}
