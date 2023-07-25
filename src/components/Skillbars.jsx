// App.js
import React from 'react';
import Skillbar from './Skillbar';
import './Skill.css'; // Import the CSS file for styling


const Skillbars = () => {
  const ITSkills = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 70 },
    { skill: 'JavaScript', percentage: 75 },
    { skill: 'MySQL', percentage: 85 },
    { skill: 'C#', percentage: 65 },
    { skill: 'Python', percentage: 55 },
    { skill: 'ReactJS', percentage: 75 },
    { skill: 'CodeIgniter', percentage: 95 },
    // Add more frontend skills as needed
  ];

  const GenSkills = [
    { skill: 'Verbal', percentage: 85 },
    { skill: 'Written', percentage: 90 },
    { skill: 'Customer Service', percentage: 85 },
    { skill: 'Integrity', percentage: 90 },
    { skill: 'SEO', percentage: 75 },
    // Add more backend skills as needed
  ];

  return (

    <div id="skills" className="sm:pl-[5rem] sm:p-8 p-16 mt-4 sm:mt-0 sm:px-4 sm:py-2 grid grid-cols-2 gap-10 mb-16">
      <div className="sm:mr-16">
        <h1 className="mb-4">IT Skills</h1>
        {ITSkills.map((skillData, index) => (
          <Skillbar key={index} skill={skillData.skill} percentage={skillData.percentage} />
        ))}
      </div>
      <div className="sm:mr-16">
        <h1 className="mb-4">General Skills</h1>
        {GenSkills.map((skillData, index) => (
          <Skillbar key={index} skill={skillData.skill} percentage={skillData.percentage} />
        ))}
      </div>
    </div>
  );
};

export default Skillbars;