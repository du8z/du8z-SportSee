import './NavVertical.css'
import Buttons from '../Buttons/Buttons'
import icone1 from '../../svg/icone1.svg'
import icone2 from '../../svg/icone2.svg'
import icone3 from '../../svg/icone3.svg'
import icone4 from '../../svg/icone4.svg'






export default function NavVertical () {
    return (
        <div className='NavContainer'>
            <div className='NavComponents'>
                <div className='ButtonsContainer'>
                <div className='svgComponent'>
                    <Buttons svg = {icone1} >
                    </Buttons>
                </div>
                <div className='svgComponent'>
                    <Buttons svg = {icone2} >
                    </Buttons>
                </div>
                <div className='svgComponent'>
                    <Buttons svg = {icone3} >
                    </Buttons>
                </div>
                <div className='svgComponent'>
                    <Buttons svg = {icone4} >
                    </Buttons>
                </div>
                </div>
                <div className='CopiryghtContainer'>
                    <p>Copiryght, SportSee 2020 </p>
                </div>
            </div>
        </div>
    )
}



