import './Menu.css'
import '../../utils/utils.css'
import logo from '../../svg/logo.svg'


export default function Menu (){
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