import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


export default function AppsMap() {
    return (
      <ImageList sx={{ width: "100%", height: "50vh" }}>
        {appsData.map((apps) => (
          <ImageListItem key={apps.img}>
            <img
              src={`${apps.img}?w=248&fit=crop&auto=format`}
              srcSet={`${apps.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={apps.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={apps.title}
              subtitle={<span>{apps.info}</span>}
              position="below"
              className="Titel"
             
              
              
            />
            <ImageListItemBar 
            title= { <a href={apps.pageName} rel="noopener noreferrer" target="_blank" > <b>{apps.title}</b></a> }
            position="top"
            className="HyperLink"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
  
  const appsData = [
    
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Placeholder billede',
      pageName: 'Intet at vise endnu',
      info: 'Når jeg har mestret webApps forsætter min personlige udvikling på mobil apps',
    }
  ];