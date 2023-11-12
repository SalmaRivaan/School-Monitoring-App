import React from 'react';
import './Attendance.css'; 
const Attendance = ({ name, data }) => {
 
const dayName=  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return (
    <div className="container">
      <div className="attendance-container">
      <h1 className="attendance-title">{dayName}</h1>
      <h1 className="attendance-date">{data.date}</h1>
      <div className="fnanblock">
      <div className={`block ${data.fn === 'absent' ? 'absent' : 'present'}`}></div>
    <div className={`block ${data.an === 'absent' ? 'absent' : 'present'}`}></div>
      </div>
      </div>
    </div>
  );
};

export default Attendance;

