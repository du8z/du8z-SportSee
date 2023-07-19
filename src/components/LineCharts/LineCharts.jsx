import "./LineCharts.css";
import { LineChart, XAxis, Line, ResponsiveContainer, Tooltip } from "recharts";
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
            return <div>Chargement des données...</div>;
      }

      const calendarDay = {
            0: "L",
            1: "M",
            2: "M",
            3: "J",
            4: "V",
            5: "S",
            6: "D",
      };

      const tableauReformat = data.sessions.map((donnees, index) => ({
            name: calendarDay[index],
            min: donnees.sessionLength,
      }));

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
                              data={tableauReformat}
                              margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                              }}
                        >
                              <defs>
                                    <linearGradient
                                          id="gradient-line"
                                          x1="0"
                                          y1="0"
                                          x2="1"
                                          y2="0"
                                    >
                                          <stop
                                                offset="0%"
                                                stopColor="white"
                                                stopOpacity="0.4"
                                          />
                                          <stop
                                                offset="100%"
                                                stopColor="white"
                                                stopOpacity="1"
                                          />
                                    </linearGradient>
                              </defs>
                              <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    tick={{ fill: "#FFFFFF", opacity: "0.5" }}
                                    strokeWidth={0}
                              />
                              <Tooltip content={<CustomTooltip />} />
                              <Line
                                    type="monotone"
                                    dataKey="min"
                                    stroke="url(#gradient-line)"
                                    fill="none"
                                    dot={false}
                                    strokeWidth={3}
                                    strokeOpacity={1}
                              />
                        </LineChart>
                  </ResponsiveContainer>
            </div>
      );
}
