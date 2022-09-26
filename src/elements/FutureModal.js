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
};

const BTNstyle = {
  marginTop: '50px',
  color: 'white',
    border: '2px solid #00BAFF'


}

export default function FutureModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={BTNstyle}>Fremtiden?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hvad skal jeg i fremtiden?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
            Når jeg er færdiguddannet multimediedesigner fra Aarhus Erhvervsakademi, læser jeg videre på professionsbachelor i webudvikling med speciale i app-udvikling eller i AI. Samtidig vil jeg arbejde videre med min egen virksomhed Siin Design.

            
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}