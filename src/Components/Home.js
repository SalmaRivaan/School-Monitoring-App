import React from 'react'
//import { useEffect, useState } from "react";
import data from '../data.json';
import Attendance from './Attendance';
import HomeWorks from './HomeWorks';
import BehavioralAnalytics from './BehavioralAnalytics';
import './Home.css';


const Home = () => {

const name = data[" NAME "]; 
const attendancedata=data[" ATTENDANCE"];
const daysdata= Object.entries(attendancedata)
const homeworksubjects= data["homework"];
const behavioralanalyticsdata=data["Behavioral Analytics"];
console.log(name);
        return (
            <main className="main-container">
            <User name={data[" NAME "]} />
            <div className="container-fluid">
              <center><h2>ATTENDANCE</h2></center>
      
              <div style={{ height: '400px' }}>
      <div className="attendence-container">
        <div className="an-fn-container">
          <span>FN</span>
          <span>AN</span>
        </div>
       
        {daysdata.map((item, index) => (
          
              <Attendance name={item[0]} data={item[1]} key={index} />
          ))}
      
      </div>
    </div>
    
            <div className="homebehavour-container">
              <HomeWorks homework={homeworksubjects} />
              <BehavioralAnalytics behavioralanalytics={behavioralanalyticsdata } />


            </div>
            </div>
          </main>
        );
    }


const User = ({ name }) => {
  return (
    <h1>Hello! {name}</h1>
  );
};












export default Home