import './Buttons.css'

export default function Buttons ({svg}) {
    return (
        <div className='ButtonContainer'>
                <div className='svgContainer'>
                    <img src={svg} alt={svg} />
            </div>
        </div>
    )
}