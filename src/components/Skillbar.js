// SkillBar.js
import React, { useState, useEffect, useRef } from 'react';
import './Skill.css';


const Skillbar = ({ skill, percentage }) => {

  const [isVisible, setIsVisible] = useState(false);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        entry.target.style.visibility = 'visible';
      }
    });
  };

  return (
    <div className={`skill-bar-container ${isVisible ? 'visible' : ''}`}
    ref={skillBarRef}>
      <div className="skill-bar-name">{skill}</div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{
            width: `${isVisible ? percentage + '%' : 0}`,
            visibility: isVisible ? 'visible' : 'hidden',
          }}>
          <div className="bar-text">{isVisible ? percentage + '%' : ''}</div>
        </div>
      </div>
    </div>
  );
};

export default Skillbar;