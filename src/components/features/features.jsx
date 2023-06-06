import './features.css'

export default function Features ({titre, color,  number}) {

    if (titre === 'Calories') {
        return (
            <div className='containerFeatures'>
                <div className='componentsFeatures'>
                <div className='svgFeatures' style={{backgroundColor : `rgba(${color}, 0.07)`} }>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.905 7.86625C10.905 7.86625 11.8375 2.38125 8.03249 0C7.91784 1.90607 6.99682 3.6731 5.49999 4.85875C3.87499 6.2875 0.81874 9.5 0.85124 12.925C0.827424 15.9116 2.49913 18.6534 5.16499 20C5.25931 18.6645 5.88737 17.4233 6.90749 16.5562C7.77187 15.8915 8.33304 14.9074 8.46499 13.825C10.7407 15.0348 12.2125 17.3521 12.34 19.9263V19.9425C14.8552 18.7904 16.5109 16.3241 16.625 13.56C16.895 10.3425 15.1325 5.9675 13.5687 4.5375C12.9784 5.85556 12.0615 7.00126 10.905 7.86625Z" fill="#FF0000"/>
                </svg>

                </div>
                <div className='textInFeatures'>
                    <p>{number}</p>
                    <p>{titre}</p>
                </div>
                </div>
            </div>
        )
    }
    if (titre === 'Protéines') {
        return (
            <div className='containerFeatures'>
                <div className='componentsFeatures'>
                <div className='svgFeatures' style={{backgroundColor : `rgba(${color}, 0.07)`}}>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2353 2.47058C17.8824 2.11764 17.4118 1.88234 17.0588 1.88234C16.9412 1.41176 16.8235 1.05881 16.4706 0.705873C15.6471 -0.117656 14.2353 -0.117656 13.4118 0.705873C12.7059 1.41176 12.5882 2.58823 13.1765 3.41176L10.5882 5.88234L9.29412 4.58823L6.70588 7.17646C6.47059 7.05881 6.11765 7.05881 5.88235 7.05881C2.58824 7.05881 0 9.64705 0 12.9412C0 16.2353 2.58824 18.8235 5.88235 18.8235C9.17647 18.8235 11.7647 16.2353 11.7647 12.9412C11.7647 12.7059 11.7647 12.3529 11.6471 12.1176L14.2353 9.5294L12.9412 8.23528L15.4118 5.7647C16.2353 6.35293 17.4118 6.23529 18.1176 5.5294C19.0588 4.70587 19.0588 3.29411 18.2353 2.47058Z" fill="#4AB8FF"/>
                </svg>


                </div>
                <div className='textInFeatures'>
                    <p>{number}</p>
                    <p>{titre}</p>
                </div>
                </div>
            </div>
        )
    }
    if (titre === 'Glucides') {
        return (
            <div className='containerFeatures'>
                <div className='componentsFeatures'>
                <div className='svgFeatures' style={{backgroundColor : `rgba(${color}, 0.07)`}}>
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.842846 10.1C1.27535 11.0575 1.4816 11.485 2.0391 12.3313C2.81535 13.5125 3.9091 14.985 5.26535 14.9975C6.47035 15.0088 6.78035 14.2138 8.41535 14.2225C10.0503 14.2313 10.3928 15.0113 11.5978 15C12.9541 14.9875 13.9903 13.6588 14.7678 12.4763C16.9378 9.17125 17.1653 5.29375 15.8266 3.2325C14.8753 1.76625 13.3741 0.910002 11.9616 0.910002C10.5241 0.910002 9.6216 1.6975 8.43285 1.6975C7.28035 1.6975 6.57785 0.908752 4.91535 0.908752C3.6591 0.908752 2.32785 1.5925 1.38035 2.77375C4.4866 4.4775 3.9816 8.91375 0.842846 10.1Z" fill="#FDCC0C"/>
                </svg>


                </div>
                <div className='textInFeatures'>
                    <p> {number} </p>
                    <p>{titre}</p>
                </div>
                </div>
            </div>
        )
    }
    if (titre === 'Lipides') {
        return (
            <div className='containerFeatures'>
                <div className='componentsFeatures'>
                <div className='svgFeatures' style={{backgroundColor : `rgba(${color}, 0.07)`}}>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 15C1.25 17.125 2.875 18.75 5 18.75H15C17.125 18.75 18.75 17.125 18.75 15H1.25Z" fill="#FD5181"/>
                <path d="M18.75 12.5H1.25C0.5 12.5 0 12 0 11.25C0 10.5 0.5 10 1.25 10H18.75C19.5 10 20 10.5 20 11.25C20 12 19.5 12.5 18.75 12.5Z" fill="#FD5181"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 0H8.75C4.625 0 1.25 3.375 1.25 7.5H18.75C18.75 3.375 15.375 0 11.25 0ZM7.5 5C6.75 5 6.25 4.5 6.25 3.75C6.25 3 6.75 2.5 7.5 2.5C8.25 2.5 8.75 3 8.75 3.75C8.75 4.5 8.25 5 7.5 5ZM12.5 5C12.5 5.75 13 6.25 13.75 6.25C14.5 6.25 15 5.75 15 5C15 4.25 14.5 3.75 13.75 3.75C13 3.75 12.5 4.25 12.5 5Z" fill="#FD5181"/>
                </svg>


                </div>
                <div className='textInFeatures'>
                    <p>{number}</p>
                    <p>{titre}</p>
                </div>
                </div>
            </div>
        )
    }

}