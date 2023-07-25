import React from 'react';
import Main from './Main';
import data from './../data/resumeData.js';


function Mains() {
  return (
    <div>

        {data.map((resume) => {
            return(<Main key={resume.id}
              source={resume.source}/>)
        })}
       
    </div>
  );
}

export default Mains;
