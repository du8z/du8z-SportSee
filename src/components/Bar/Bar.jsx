import "./Bar.css";
import {
      BarChart,
      ResponsiveContainer,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
} from "recharts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function BarList() {
      const { uid } = useParams();
      const [data, setData] = useState(null);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await fetch(
                              `http://localhost:3000/user/${uid}/activity`
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
      const { sessions } = data;
      const tableauReformat = sessions.map((donnees) => {
            const lastDigit = donnees.day.slice(-1); // Récupère le dernier chiffre de "day"
            return {
                  name: lastDigit,
                  uv: donnees.calories,
                  pv: donnees.kilogram,
            };
      });

      const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
                  return (
                        <div className="custom-tooltip">
                              <p className="label">{` ${payload[0].value} kg`}</p>
                              <p className="label">{`  ${payload[1].value}Kcal`}</p>
                        </div>
                  );
            }
            return null;
      };

      return (
            <div className="container">
                  <p className="textTopBar">Activité quotidienne </p>
                  <div className="containerPoint">
                        <div className="descriptionPointList">
                              <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                              >
                                    <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                                          fill="#282D30"
                                    />
                              </svg>

                              <p className="textPointList">Poids (kg)</p>
                        </div>
                        <div className="descriptionPointList">
                              <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                              >
                                    <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                                          fill="#E60000"
                                    />
                              </svg>

                              <p className="textPointList">
                                    Calories brûlées (kCal)
                              </p>
                        </div>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                              stroke={"black"}
                              data={tableauReformat}
                              barGap={5}
                              margin={{
                                    right: 30,
                                    left: 20,
                                    bottom: 30,
                              }}
                        >
                              <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                              />
                              <XAxis
                                    dataKey="name"
                                    tick={{ fill: "#9B9EAC" }}
                                    stroke="#DEDEDE"
                                    dy={10}
                                    tickLine={false}
                                    scale={"point"}
                                    padding={{ right: 15, left: 15 }}
                                    z={true.toString()}
                              />
                              <YAxis
                                    fill="#E60000"
                                    tick={{ fill: "#9B9EAC" }}
                                    stroke="white"
                                    tickCount={3}
                                    orientation="right" /* domain={3} */
                              />

                              <Tooltip content={<CustomTooltip />} />
                              <Bar
                                    barSize={10}
                                    radius={[20, 20, 0, 0]}
                                    dataKey="pv"
                                    fill="#282D30"
                              />
                              <Bar
                                    barSize={10}
                                    radius={[20, 20, 0, 0]}
                                    dataKey="uv"
                                    fill="#E60000"
                              />
                        </BarChart>
                  </ResponsiveContainer>
            </div>
      );
}
