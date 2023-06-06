import './ScoreChart.css'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip,  } from 'recharts';
import React from "react";

export default function ScoreCharts ()  {
    const data = [
        {
          "name": "18-24",
          "uv": 12,
          "pv": 2400,
          "fill": "#FF0000"
        }  ,
        {
          "name": "25-29",
          "uv": 26.69,
          "pv": 4567,
          "fill": "#FFF"
        }, /*
        {
          "name": "30-34",
          "uv": -15.69,
          "pv": 1398,
          "fill": "#8dd1e1"
        },
        {
          "name": "35-39",
          "uv": 8.22,
          "pv": 9800,
          "fill": "#82ca9d"
        },
        {
          "name": "40-49",
          "uv": -8.63,
          "pv": 3908,
          "fill": "#a4de6c"
        },
        {
          "name": "50+",
          "uv": -2.63,
          "pv": 4800,
          "fill": "#d0ed57"
        },
        {
          "name": "unknow",
          "uv": 6.67,
          "pv": 4800,
          "fill": "#ffc658" 
        }  */
      ]



    return (
        <div className='containerRadialBar'>
        <p className='TextScoreTop'>Score</p>
        <div className='TextScoreMiddle'>
            <p><span>{data[0].uv}%</span></p>
            <p>de votre</p>
            <p>objectif</p>  
        </div>
        <div className='parentRing'>
        <div className='whiteRingMiddle'>
        </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="40%" barSize={15} data={data} >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="uv"
            cornerRadius={20}
          />

        </RadialBarChart>
        </ResponsiveContainer>
        
                </div>
    )


}