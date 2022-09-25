import Button from '@mui/material/Button';
import '../styles/ButtonStyle.css';
import AboutMe from './AboutMe.js';


const onDownload = () => {
  const link = document.createElement("a");
  link.download = `MichaelHovgaard.pdf`;
  link.href = '../download/CV.pdf';
  link.click(); }

export default function PageTwoButtons(){
    return (

    
    <div className='CTApageTwo'>
    
      <Button className='filled button ' variant="contained" onClick={onDownload}>Download CV</Button>
      <AboutMe/>
      </div>
    )
}
