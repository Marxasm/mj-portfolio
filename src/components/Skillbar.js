// SkillBar.js
import React from 'react';


const Skillbar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="bar-container">
        <div className="bar" style={{ width: `${percentage}%` }}>
          <div className="bar-text">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default Skillbar;