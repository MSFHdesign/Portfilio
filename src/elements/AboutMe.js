import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: 'white',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '70vh',
  bgcolor: '#0B111E',
  
  border: '2px solid #00BAFF',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll', 
};

const BTNstyle = {
    border: '2px solid #00BAFF',
    width: '100px',
    minWidth: '70px',
    color: 'white',

}

export default function AboutMe() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={BTNstyle}>Om mig</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Jeg er...
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>
                Michael Hovgaard og er 31 år. Jeg har arbejdet med markedsføring, branding, online identitet samt marketing i 17 år. Året 2021 blev året, hvor jeg fandt uddannelsen til multimediedesign. Min interesse for programmering startede og blev hurtigt et sprog, jeg taler og forstår. 
                </p>
                <p>
                Igennem 1. og 2. semester blev der skabt en dybere og dybere forståelse af HTML, CSS og JavaScript. Her kom mine 17 år med markedsføring og branding til sin ret i form af forståelse for analyse og strategi. 
                </p>
                <p>
Jeg snakker både programmeringssprog og menneskesprog. Jeg har lært, at jeg har en evne til at kommunikere mellem fagfolk og ikke fagfolk, således at begge får en korrekt forståelse for projektet. 
</p>
<p>
Jeg har været chef for 35+ ansatte derfor forekommer tværfagligt teamwork og projektledelse, mig naturligt. 
</p>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}