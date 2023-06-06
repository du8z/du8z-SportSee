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

export default function BarList() {
      const data = [
            {
                  name: "1",
                  uv: 4000,
                  pv: 2400,
                  amt: 2400,
            },
            {
                  name: "2",
                  uv: 3000,
                  pv: 1398,
                  amt: 2210,
            },
            {
                  name: "3",
                  uv: 2000,
                  pv: 5800,
                  amt: 2290,
            },
            {
                  name: "4",
                  uv: 2780,
                  pv: 3908,
                  amt: 2000,
            },
            {
                  name: "5",
                  uv: 1890,
                  pv: 4800,
                  amt: 2181,
            },
            {
                  name: "6",
                  uv: 2390,
                  pv: 3800,
                  amt: 2500,
            },
            {
                  name: "7",
                  uv: 3490,
                  pv: 4300,
                  amt: 2100,
            },
            {
                  name: "8",
                  uv: 3490,
                  pv: 4300,
                  amt: 2100,
            },
            {
                  name: "9",
                  uv: 3490,
                  pv: 4300,
                  amt: 2100,
            },
            {
                  name: "10",
                  uv: 3490,
                  pv: 4300,
                  amt: 2100,
            },
      ];

      const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
                  return (
                        <div className="custom-tooltip">
                              <p className="label">{` ${payload[0].value} kg`}</p>
                              <p className="label">{`  ${payload[1].value}`}</p>
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
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
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
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                                          fill="#E60000"
                                    />
                              </svg>

                              <p className="textPointList">
                                    Calories brûlées (kCal)
                              </p>
                        </div>
                  </div>
                  <ResponsiveContainer width="100%" height= '100%'>
                        <BarChart
                              stroke={"black"}
                              data={data}
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
                                    padding={{ right: 15, left: 15, }}
                                    z
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
