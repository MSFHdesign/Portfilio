import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function ProgrammeringMap() {
    return (
      <ImageList sx={{ width: "100%", height: 300 }}>
        {programmeringData.map((programmering) => (
          <ImageListItem key={programmering.img}>
            <img
              src={`${programmering.img}?w=248&fit=crop&auto=format`}
              srcSet={`${programmering.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={programmering.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={programmering.title}
              subtitle={<span classname ='subtitlespan'>{programmering.info}</span>}
              position="below"
              className="Titel"
              
            />
            <ImageListItemBar 
            title= {<span> <a href={programmering.pageName} rel="noopener noreferrer" target="_blank" > <b>{programmering.title}</b></a> </span>}
            position="top"
            className="HyperLink"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  const programmeringData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Reklamefilm.nu',
      pageName: 'http://www.reklamefilm.nu',
      info: 'Film producent',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Siin Design',
      pageName: 'http://www.siindesign.dk',
      info: 'Frontend develop',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Going-out',
      pageName: 'http://www.Going-out.dk',
      info: 'Kultur mødested',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      pageName: 'http://www.google.dk',
      info: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      pageName: 'http://www.google.dk',
      info: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      pageName: 'http://www.google.dk',
      info: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      pageName: 'http://www.google.dk',
      info: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      pageName: 'http://www.google.dk',
      info: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      pageName: 'http://www.google.dk',
      info: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      pageName: 'http://www.google.dk',
      info: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      pageName: 'http://www.google.dk',
      info: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      pageName: 'http://www.google.dk',
      info: '@southside_customs',
    },
  ];