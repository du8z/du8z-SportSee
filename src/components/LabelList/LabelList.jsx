import './LabelList.css'
import React from 'react';
import BarList from '../Bar/Bar';
import Features from '../features/features';
import LineCharts from '../LineCharts/LineCharts';
import RadarChartComponent from '../RadarChart/RadarChart';
import ScoreCharts from '../ScoreChart/ScoreChart';


export default function LabelList () {

    return (
        <>
        
        <div className='ContainerLabel'>
                <p className='TextWelcome'>Bonjour<span> Thomas</span></p>
                <p className='TextCongratulation'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className='ComponentPosition'>
        <div className='componentsLeft'>
        <BarList />
        <div className='componentsBotPosition'>
            <div className='responsiveDiv'>
            <LineCharts />
            </div>
            <div className='responsiveDiv'>
            <RadarChartComponent/>
            </div>
            <div className='responsiveDiv'>
            <ScoreCharts/>
            </div>
 
        </div>

        </div>
        <div className='containerComponentFeatures'>
        <Features titre = {'Calories'} color = {'255, 0, 0'} number = {'1,930kCal'} />
        <Features titre = {'Protéines'} color = {'74,184,255'} number = {'155g'}/>
        <Features titre = {'Glucides'} color = {'253,204,12'} number = {'290g'}/>
        <Features titre = {'Lipides'} color = {'253,81,129'} number = {'50g'}/>
        </div>
        </div>
        </>
        
    )
    
        
}