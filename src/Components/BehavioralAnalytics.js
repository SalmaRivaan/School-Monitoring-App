import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import './BehavioralAnalytics.css';
const BehavioralAnalytics = ({ behavioralanalytics= [] }) => {
    
        const newData = prepareData(behavioralanalytics);
      
        if (!newData.length) return <div></div>;
        return (
          <div className="behavioral-container ">
        <center>    <h2>
              Behavioral Analytics
            </h2></center>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
              
                <Pie
                  data={newData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                innerRadius={5}
                  fill="white"
                  label
                >
                  {newData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.name === "GOOD" ? "green" : "red"}
                    />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="middle"
                  align="right"
                  width={"30%"}
                  layout="vertical"
                  iconSize={15}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
  
      
}
const prepareData = (data) => {
    const counts = data.reduce((acc, value) => {
      acc[value.toUpperCase()] = (acc[value.toUpperCase()] || 0) + 1;
      return acc;
    }, {});
  
    return Object.keys(counts).map((value) => ({
      name: value,
      value: counts[value],
    }));
  };
  

export default BehavioralAnalytics