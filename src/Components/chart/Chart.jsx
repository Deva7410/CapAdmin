import "./chart.css";
import React, { PureComponent } from 'react';
import { 
  LineChart,
   Line,
    XAxis,
    CartesianGrid, 
    Tooltip,
     ResponsiveContainer,
     } from 'recharts';
export default function Chart(title,dataKey,grid) {

    const data = [
        {
          name: "Jan",
          "Active User": 4000,
         
        },

        {
          name: "Feb",
          "Active User": 3000,
         
        },

        {
          name: "Mar",
          "Active User": 2000,
         
        },  

        {
          name: "Apr",
          "Active User": 4000,
         
        },

        {
          name: "May",
          "Active User": 2000,
         
        },

        {
          name: "Jun",
          "Active User": 3000,
         
        },

        {
          name: "Jul",
          "Active User": 4000,
         
        },


        {
          name: "Aug",
          "Active User": 3500,
         
        },


        {
          name: "Sep",
          "Active User": 4000,
         
        },

        {
          name: "Oct",
          "Active User": 3000,
         
        },


        {
          name: "Nov",
          "Active User": 2000,
         
        },


        {
          name: "Dec",
          "Active User": 4000,
         
        },
     
      ];
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                <XAxis dataKey="name"  stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
             <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
              
                </LineChart>
            </ResponsiveContainer>
            
        </div>
    );
}
