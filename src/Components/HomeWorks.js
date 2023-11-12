import React from 'react'
import './HomeWorks.css';
const HomeWorks = ({ homework = [] }) => {
 
    return (
        <div className="homework-container">
         <center><h2>Homeworks</h2></center> 
      
          <div className="subject-container">
          {homework.map((item,index) => (
            <h2 key={index} className="text-uppercase fs-3">
              {item.toUpperCase()}
            </h2>
          ))}
        </div>
      </div>
      
           
      );
    };
   
  
export default HomeWorks