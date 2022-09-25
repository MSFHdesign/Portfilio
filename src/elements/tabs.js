import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

import CreativeCloudSkills from './CCskills.js';
import Programmeringsskills from './Programmeringsskills.js';
import Personligeskills from './PersonligeSkills.js';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';


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

export default function UnstyledTabsIntroduction() {
  return (
<div className='KompetanceTabs'>
    <h2>Kompetencer</h2>
    <TabsUnstyled defaultValue={1}>
    <TabsList>
        <Tab><p>Cretive Cloud</p></Tab>
        <Tab><p>Programmering</p></Tab>
        <Tab><p>Personligt</p></Tab>
    </TabsList>
    <TabPanel value={0}>
       <CreativeCloudSkills /> 
       Jeg er øvet i de fleste Adobe programmer, men er især erfaren i adobe XD jeg er ligeledes begyndt at arbejde med 3D effekt både i adobe after-effect og i blender. 
    </TabPanel>
    <TabPanel value={1}>
        <Programmeringsskills/>
    </TabPanel>

    <TabPanel value={2}>
       Mine personlige skills er nogle jeg har fået hen af livet vej 
        <Personligeskills />
    </TabPanel>
    </TabsUnstyled>
    </div>
  );
}