import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

//Billeder
import RFnu from '../pictures/XDreklamefilm.png';
import SDdk from '../pictures/XDsiindesign.png'



export default function DesignMap() {
    return (
      <ImageList sx={{ width: "100%", height: 300 }}>
        {designData.map((design) => (
          <ImageListItem key={design.img}>
            <img
              src={`${design.img}?w=248&fit=crop&auto=format`}
              srcSet={`${design.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={design.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={design.title}
              subtitle={<span> {design.info}</span>}
              position="below"
              className="Titel"
              
            />
            <ImageListItemBar 
            title= {<span> <a href={design.pageName} rel="noopener noreferrer" target="_blank" > <b>{design.title}</b></a> </span>}
            position="top"
            className="HyperLink"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  const designData = [
    {
      img: RFnu,
      title: 'SPA for reklamefilm ',
      pageName: 'https://www.reklamefilm.nu',
      info: 'Et lyst design med fokus på produkter',
    },
    {
      img: SDdk,
      title: 'Siin Design',
      pageName: 'http://www.siindesign.dk',
      info: 'Mørkt design der fokus på kontrast',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Going-out',
      pageName: 'http://www.Going-Out.dk',
      info: 'Et lyst design',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      pageName: 'www.google.dk',
      info: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      pageName: 'www.google.dk',
      info: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      pageName: 'www.google.dk',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      pageName: 'www.google.dk',
      info: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      pageName: 'www.google.dk',
      info: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      pageName: 'www.google.dk',
      info: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      pageName: 'www.google.dk',
      info: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      pageName: 'www.google.dk',
      info: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      pageName: 'www.google.dk',
      info: '@southside_customs',
    },
  ];