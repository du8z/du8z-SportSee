import './RadarChart.css'
import { RadarChart, PolarGrid,PolarAngleAxis , PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts'

export default function RadarChartComponent () {
    const data = [
        {
          "subject": "Intensité",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "Vitesse",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Force",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Endurance",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Energie",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "Cardio",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ]
    
    
    return (
        <div className='RadarContainer'>
        <ResponsiveContainer width="100%" height= '100%'>
        <RadarChart outerRadius={90}  data={data} >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" tick={{fill : 'white', fontSize : 15}}   />
        <PolarRadiusAxis  tick={false} axisLine={false}   />
        <Radar  dataKey= 'A' stroke="#282D30" fill="rgb(255, 1, 1)" fillOpacity={0.7} />
        <Legend />
        </RadarChart>
        </ResponsiveContainer>
        </div>
    )
}