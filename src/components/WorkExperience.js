import React from 'react';

const WorkExperience = () => {
  return (
    <div className="work-experience-container"> {/* Apply a container class */}
      <h3 className="work-experience-title">Work Experience</h3> {/* Apply title class */}
      <ul>
        <li className="work-experience-item"> {/* Apply item class */}
          <span className="work-experience-date">May 2023 - Present</span> {/* Apply date class */}
          Passenger Service Agent at Swissport
        </li>
        <li className="work-experience-item"> {/* Apply item class */}
          <span className="work-experience-date">Mar 2022 - Nov 2023</span> {/* Apply date class */}
          Technical Customer Support at Blue Ocean Contact Centers
        </li>
        <li className="work-experience-item"> {/* Apply item class */}
          <span className="work-experience-date">Oct 2021 - Mar 2022</span> {/* Apply date class */}
          Night Auditor at Holiday Inn Express
        </li>
      </ul>
    </div>
  );
}

export default WorkExperience;
