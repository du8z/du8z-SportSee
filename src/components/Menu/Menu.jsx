import './Menu.css'
import '../../utils/utils.css'
import logo from '../../svg/logo.svg'
import { useParams } from 'react-router-dom'
import fetchData from '../../data/Fetch/FetchData'

export default function Menu (){

    const test = fetchData
    console.log(test);


    return (
        <div className='containerMenu'>
            <div className="componentsMenu ">

            <div className='logoMenu flexStart'>
                <img src= {logo} alt={logo} />
            </div>

            <div className='navMenu'>
            <ul className=' flexCenter'>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
            </div>

            </div>
        </div>
    )
}