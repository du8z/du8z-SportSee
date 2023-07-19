import "./LabelList.css";
import React from "react";
import BarList from "../Bar/Bar";
import Features from "../features/features";
import LineCharts from "../LineCharts/LineCharts";
import RadarChartComponent from "../RadarChart/RadarChart";
import ScoreCharts from "../ScoreChart/ScoreChart";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function LabelList() {
      const { uid } = useParams();
      const [data, setData] = useState(null);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await fetch(
                              `http://localhost:3000/user/${uid}`
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
      } else {
            const { userInfos } = data;

            return (
                  <>
                        <div className="ContainerLabel">
                              <p className="TextWelcome">
                                    Bonjour<span> {userInfos.firstName}</span>
                              </p>
                              <p className="TextCongratulation">
                                    Félicitation ! Vous avez explosé vos
                                    objectifs hier 👏
                              </p>
                        </div>
                        <div className="ComponentPosition">
                              <div className="componentsLeft">
                                    <BarList />
                                    <div className="componentsBotPosition">
                                          <div className="chartsPosition responsiveDiv ">
                                                <LineCharts />
                                          </div>
                                          <div className="responsiveDiv">
                                                <RadarChartComponent />
                                          </div>
                                          <div className="chartsPosition responsiveDiv ">
                                                <ScoreCharts />
                                          </div>
                                    </div>
                              </div>
                              <div className="containerComponentFeatures">
                                    <Features
                                          titre={"Calories"}
                                          color={"255, 0, 0"}
                                    />
                                    <Features
                                          titre={"Protéines"}
                                          color={"74,184,255"}
                                    />
                                    <Features
                                          titre={"Glucides"}
                                          color={"253,204,12"}
                                    />
                                    <Features
                                          titre={"Lipides"}
                                          color={"253,81,129"}
                                    />
                              </div>
                        </div>
                  </>
            );
      }
}
