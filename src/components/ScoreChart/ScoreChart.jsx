import './ScoreChart.css'
import { RadialBarChart, RadialBar,  ResponsiveContainer,   } from 'recharts';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


 

export default function ScoreCharts ()  {
    const { uid } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
          try {
          const response = await fetch(`http://localhost:3000/user/${uid}`);
          const jsonData = await response.json();
          setData(jsonData.data);
          } catch (error) {
          console.error("Une erreur s'est produite :", error);
          }
    };

    fetchData();
    }, [uid]);
    if (data === null) {
          return null; // Ou afficher un indicateur de chargement, par exemple.
        }


      const tableauReformat = [
        {
          value: data.todayScore, 
          fill : '#FF0000'
        },
        {
          value: 1,
          fill : '#FFFFFF'
        },
      ]

    return (
        <div className='containerRadialBar'>
        <div className='TextScoreMiddle'>
            <p><span>{data.todayScore*100}%</span></p>
            <p>de votre</p>
            <p>objectif</p>  
        </div>
        <div className='parentRing'>
        <div className='whiteRingMiddle'>
        <p className='TextScoreTop'>Score</p>
          
        </div>

        </div>

        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="40%" barSize={15} data={tableauReformat} >
          <RadialBar
            minAngle={15}
            clockWise
            dataKey= 'value'
            cornerRadius={20}
          />

        </RadialBarChart>
        </ResponsiveContainer>
        
                </div>
    )


}