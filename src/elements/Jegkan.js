import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../styles/accordionStyle.css';

const Style = {
    width: '75%',
    bgcolor: '#0B111E',

}

export default function SimpleAccordion() {

  return (
    <div className='accordions'>

      <h2>Min arbejdsprocess</h2>
      <Accordion sx={Style}
      className='panels'>
        <AccordionSummary 
          expandIcon= "▼"
          color= "white"
          aria-controls="panel0a-content"
          id="panel0a-header"
          className='panels'
          
        
        >
          <Typography className='HeadLights'> Desk & field research</Typography>
        </AccordionSummary>
        <AccordionDetails 
          className='AccordionDetails'
        >
          <Typography className='Tell'>
                <h3> For at kunne forstå din målgruppe  </h3>
                <p>Start jeg altid med en grundig desk og field research, dvs at der tager tid til at forstå dig og dine brugeres behov</p>
                <p>Her efter er det vigtigt at klargøre "hvad er dig og deres problem" for sådan kan der arbejdes ud fra at løse et problem</p>
  
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={Style}>
        <AccordionSummary
        
          expandIcon= "-"
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='panels'
        >
          <Typography className='HeadLights'> Sketching og Grafisk Design</Typography>
        </AccordionSummary>
        <AccordionDetails 
          className='AccordionDetails'
        >
          <Typography className='Tell'>
          <h3> For at minske spild tiden - LOWFI </h3>
                <p>Laver jeg altid en hård skitse for at forstå elementers egenskaber og vigtighed - De får deres værdi fra undersøgelserne.</p>
                <p>Der tegnes et tenden som kan give nogle klare tegn på hvordan de skal se ud på det endelige design, samt deres placeringer - Og så det noget hurtigere at ændre på en tegning end på koder.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={Style}>
        <AccordionSummary
          expandIcon="-"
          aria-controls="panel2a-content"
          id="panel2a-header"
          className='panels'
        >
          <Typography className='HeadLights'>UX/UI Design</Typography>
        </AccordionSummary>
        <AccordionDetails
          className='AccordionDetails'
        >
          <Typography className='Tell'>
          <h3> Se din kommende side komme til liv - HIFI  </h3>
                <p>Med udgangspunkt i LOWFI, opbygges en testbar XD prototype således at du kan se og vi kan teste din løsning på målgruppen, dette gøres for at kunne se hvor dine brugere stopper eller om de kan finde konkrete ting du gerne vil have de finder. </p>
                <p>Dette gøres for at gøre opbygningen af koderne lettere således at der ikke skal opfindes design mens der kodes.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={Style}>
        <AccordionSummary
          expandIcon="-"
          aria-controls="panel3a-content"
          id="panel3a-header"
          className='panels'
        >
          <Typography className='HeadLights'>Frontend develop</Typography>
        </AccordionSummary>
        <AccordionDetails
          className='AccordionDetails'
        >
          <Typography className='Tell'>
          <h3> SPA eller MPA?  </h3>
                <p> Der er stor forskel på om du vil have en "hurtigt" løsning eller om du vil have den rigtige løsning. Ligeledes er der mange måder at bygge en hjemmeside op. De fleste moderne hjemmesider er opbygget i WordPress som er et CMS system der ikke har data-sikkerheden i tops. DVS. har du fx. en webshop er din data nemt at få fat i. </p>
                <p>
                    Jeg vil næsten altid anbefale at du får lavet den rigtige løsning fremfor den hurtige. Sikkerhed fremfor alt!
                </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={Style}>
        <AccordionSummary
          expandIcon="-"
          aria-controls="panel4a-content"
          id="panel4a-header"
          className='panels'
        >
          <Typography className='HeadLights'>Testing</Typography>
        </AccordionSummary>
        <AccordionDetails
          className='AccordionDetails'
        >
          <Typography className='Tell'>
          <h3> Test, test og flere test  </h3>
                <p>For at kunne optimere brugerrejsen er vi nød til at få noget data så vi kan forbedre løsningen</p>
                
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
