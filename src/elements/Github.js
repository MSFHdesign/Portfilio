import Button from '@mui/material/Button';
import Github from '../pictures/logos/github.png';

export default function LinkDin() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
      return (
        <div>
          <Button onClick={() => openInNewTab('https://github.com/MSFHdesign')}>
            <img src={Github} alt="Link der åbner min Github profil"/>
          </Button>
        </div>
      );
    };