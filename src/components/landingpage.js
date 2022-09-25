
import HeroText from '../elements/HeroText.js';


import SimpleSlider from '../elements/SimpleSlider.js';
import Videohero from '../elements/HeroVideo';
import '../styles/LandingPage.css' 

export default function LandingPage(){
    return (
<main>
     <header className='firstview'>
        < HeroText/>
        
        <Videohero />
        </header>
<SimpleSlider
                options={{
                  
                  infinite: true,
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  autoplay: true,
                  speed: 2500,
                  autoplaySpeed: 2500,
                  arrows: false,
                  cssEase: "linear"
                }}
            />

</main>
    )
}



