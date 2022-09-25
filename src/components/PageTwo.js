import CTAbuttons from '../elements/CTAbuttons.js';
import PictureSplitV from '../elements/PageTwoPic.js';
import PictureSplitVII from '../elements/PageTwoPic_2.js';
import Tabs from '../elements/tabs.js';
import ProjektsTabs from '../elements/portfolio.js';
import PictureSplitH from '../elements/PageTwoPicH.js';
import SimpleAccordion from '../elements/Jegkan.js';
import FutureModal from '../elements/FutureModal.js';
import '../styles/PageTwoCSS.css';

export default function PageTwo(){
    return (
<section className='PageTwo'>

        <CTAbuttons/>
        <PictureSplitV/>
        <Tabs />
        <PictureSplitH/>
        <ProjektsTabs/>
        <PictureSplitVII/>
        <SimpleAccordion/>
        <FutureModal />
</section>
    
    
    )
}

