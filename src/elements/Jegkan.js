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

      <h2>Min arbejdsproces</h2>
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
                <p>Starter jeg altid med grundig desk og field research. Jeg bruger derfor tid på at forstå dig, dine virksomhed og dine kunders behov</p>
                <p>Herefter er det vigtigt at klargøre "Hvad er problemmet?", så vi får løst din problematik.</p>
  
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
          <h3> For at mindske spild af tiden - LOWFI </h3>
                <p>Laver jeg altid en hård skitse for at forstå elementers egenskaber og vigtighed - De får deres værdi fra undersøgelserne.</p>
                <p>Der tegnes for at få et klart overblik over hvordan det skal se ud på det endelige design, samt deres placeringer. Det giver et visuelt billede og det er hurtigere at ændre på en tegning end på koder.</p>
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
          <h3> Se din kommende side komme til live - HIFI  </h3>
                <p>Med udgangspunkt i LOWFI, opbygges en testbar XD prototype. Herefter kan du visuelt se den. Er du tilfreds, så testes din løsning på målgruppen for at se hvordan kunderejsen for dine brugere er baseret på problematikken.</p>
                <p>På den måde sikrer vi at designet er tilfredsstillende før opbygningen af koderne kan begynde</p>
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
                <p> Der er stor forskel på om du vil have en "hurtig" løsning eller om du vil have den rigtige løsning. Der er mange måder at bygge en hjemmeside op på. De fleste moderne hjemmesider er opbygget i WordPress, som er et CMS system der ikke har data-sikkerheden i top. DVS. har du fx. en webshop er din data nem at få fat i. </p>
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
                <p>For at kunne optimere brugerrejsen er data alfa og omega. Den data kan vi bruge til at optimerer løsningen så den sidder lige i skabet.</p>
                
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
