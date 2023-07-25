// SkillBar.js
import React from 'react';
import './Skill.css';


const Skillbar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar-container">
      <div className="skill-bar-name">{skill}</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${percentage}%` }}>
          <div className="bar-text">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default Skillbar;