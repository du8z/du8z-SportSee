import './RadarChart.css'
import { RadarChart, PolarGrid,PolarAngleAxis , PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts'
import { useEffect,  useState, } from 'react';
import { useParams } from 'react-router-dom';

export default function RadarChartComponent () {
  const { uid } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
        try {
        const response = await fetch(`http://localhost:3000/user/${uid}/performance`);
        const jsonData = await response.json();
        setData(jsonData.data);
        } catch (error) {
        console.error("Une erreur s'est produite :", error);
        }
  };

  fetchData();
  }, [uid]);

  if (data === null) {
        return <div>Chargement des données...</div>;
  }



let tableauReformat = []
for (let i = 0; i < data.data.length; i++) {
  let Table = {
    subject: data.kind[i + 1],
    key: data.data[i].kind,
    value: data.data[i].value,


  }
  tableauReformat.push(Table)
}

    
    
    return (
      <div className='vraiPapa'>
      <div className='RadarParent'>
        <div className='RadarContainer'>
        <ResponsiveContainer width="100%" height= '100%' >
        <RadarChart outerRadius={90}  data={tableauReformat} >
        <PolarGrid radialLines={+false} />
        <PolarAngleAxis dataKey="subject" tick={{fill : 'white', fontSize : 15}}   />
        <PolarRadiusAxis  tick={+false} axisLine={+false}   />
        <Radar  dataKey= 'value' stroke="#282D30" fill="rgb(255, 1, 1)" fillOpacity={0.7} />
        <Legend />
        </RadarChart>
        </ResponsiveContainer>
        </div>
      </div>
      </div>
    )
}