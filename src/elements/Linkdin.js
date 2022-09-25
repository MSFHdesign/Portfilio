
import Linkdin from '../pictures/logos/linkedin.png';
import Button from '@mui/material/Button';




export default function LinkDin() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
      return (
        <div>
          <Button onClick={() => openInNewTab('https://www.linkedin.com/in/michael-hovgaard-075b9721a/')}>
            <img src={Linkdin} alt="Link der åbner min Linkdin profil"/>
          </Button>
        </div>
      );
    };