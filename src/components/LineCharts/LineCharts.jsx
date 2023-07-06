import "./LineCharts.css";
import { LineChart, XAxis, Tooltip, Line, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LineCharts() {
      const { uid } = useParams();
      const [data, setData] = useState(null);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await fetch(
                              `http://localhost:3000/user/${uid}/average-sessions`
                        );
                        const jsonData = await response.json();
                        setData(jsonData.data);
                  } catch (error) {
                        console.error("Une erreur s'est produite :", error);
                  }
            };

            fetchData();
      }, [uid]);

      if (data === null) {
            return null;
      }
      console.log(data);
      const calendarDay = {
            0: "L",
            1: "M",
            2: "M",
            3: "J",
            4: "V",
            5: "S",
            6: "D",
      };

      //   const tableauReformat = data.sessions.map((donnees) => {
      //     return {
      //           name: calendarDay,
      //           min: donnees.calories,
      //     };
      // });
      // console.log(tableauReformat);
      let tableauReformat = [];
      for (let i = 0; i < data.sessions.length; i++) {
            let Table = {
                  name: calendarDay[i],
                  min: data.sessions[i].sessionLength,
            };
            tableauReformat.push(Table);
      }
      console.log(tableauReformat);
      const data2 = [
            {
                  name: "L",
                  uv: 4000,
                  pv: 2400,
                  amt: 2400,
            },
            {
                  name: "M",
                  uv: 3000,
                  pv: 1398,
                  amt: 2210,
            },
            {
                  name: "M",
                  uv: 2000,
                  pv: 3800,
                  amt: 3290,
            },
            {
                  name: "J",
                  uv: 2780,
                  pv: 1908,
                  amt: 2000,
            },
            {
                  name: "V",
                  uv: 1890,
                  pv: 4800,
                  amt: 2181,
            },
            {
                  name: "S",
                  uv: 2390,
                  pv: 3800,
                  amt: 2500,
            },
            {
                  name: "D",
                  uv: 3490,
                  pv: 4300,
                  amt: 2100,
            },
      ];

      const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
                  return (
                        <div className="custom-tooltip-LineChart">
                              <p className="label">{` ${payload[0].value} min`}</p>
                        </div>
                  );
            }
            return null;
      };

      return (
            <div className="ContainerLineChart">
                  <p className="textInLineCharts">Durée moyenne des sessions</p>
                  <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                              width={258}
                              height={263}
                              data={data2}
                              margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                              }}
                        >
                              <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    tick={{ fill: "#FFFFFF", opacity: "0.5" }}
                                    strokeWidth={0} /* type='monotone' */
                              />
                              <Tooltip content={<CustomTooltip />} />
                              <Line
                                    type="monotone"
                                    dataKey="uv"
                                    stroke="#FFF"
                                    fill="white"
                                    dot={false}
                                    strokeWidth={3}
                                    strokeOpacity={1}
                              />
                        </LineChart>
                  </ResponsiveContainer>
            </div>
      );
}
