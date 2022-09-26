import * as React from 'react';

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import '../styles/portfolioStyle.css'

// Maps
import DesignMap from './DesignMap.js';
import ProgrammeringMap from './ProgrammeringMap.js';
import AppsMap from './AppsMap.js';


const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #f2f2f2;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 90%;
  
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {

    background-color: #00bbff8d;
  }

  &:focus {
    color: #fff;
    outline: 3px solid #0B111E;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #00bbff8d;
    color: #f2f2f2;
  }


`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 80vw;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  
  border: 2px solid #00BAFF;
  border-radius: 12px;
  opacity: 0.6;
  `,
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
    color: white;
    width: 80vw;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 0px 10px #00bbff8d;
  `,
);

export default function ProjektsTabs() {
  return (
<div className='KompetanceTabs'>
    <h2>Projekter</h2>
    <TabsUnstyled defaultValue={0}>
    <TabsList>
        <Tab><p>Design projekter</p></Tab>
        <Tab><p>SPA / WPA</p></Tab>
        <Tab><p>Mobil Apps</p></Tab>
   
    </TabsList>
    <TabPanel value={0}>

    <h3> Design Projekter</h3>
        <p> Jeg forsøger altid at skabe unikke design der tager udgangspunkt i udbyder og forbrugerens behov. Jeg spilder ikke din dyrebare tid, derfor bygges siden først op i Adobe XD. Det giver mulighed for at lave ændringer hurtigt og nemt. Når designet er perfekt, bygges koderne op.</p>
       <DesignMap/>

    </TabPanel>
    <TabPanel value={1}>

    <h3> SPA / MPA </h3>
        <p> Der er stor forskel på ønsket om en SPA <span> (Single Page Application)</span> eller MPA.  </p>
        <p> Digitale vaner ændrer sig og forbrugerne har vænnet sig til METAs opbygning af hjemmesider. SPA er den mest anvendelige.  </p>
        <ProgrammeringMap />

    </TabPanel>

    <TabPanel value={2}>
        <h3> Mobil Apps</h3>
        <p> Mit mål er at udvikle mobil apps og AI. </p>
        <AppsMap />
    </TabPanel>

    </TabsUnstyled>
    </div>
  );
}

