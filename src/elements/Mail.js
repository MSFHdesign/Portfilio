import Mail from '../pictures/logos/email.png';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '90%',
  left: '50%',
  color: 'white',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '9%',
  bgcolor: '#0B111E',
  border: '2px solid #00BAFF',
  boxShadow: 24,
  p: 4,
  overflowX: 'scroll', 
};

const BTNstyle = {

 
    color: 'black',

}

export default function LinkDin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={BTNstyle}><img src={Mail} alt=""></img></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Send mig en mail til <a href="mailto:Michael@Siindesign.dk">Michael@SiinDesign.dk</a>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}