import Home from '../pictures/logos/home.png';


import * as React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';

export default function ScrollTop(props) {

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
<div> <Button onClick={handleClick}> <img src={Home} alt="Hjem knap"></img></Button></div>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};
