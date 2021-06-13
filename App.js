import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from '../Ache/Assets/CustomTheme/custom-theme.json';
import StackNavigation from './Navigation/StackNavigation';


const Ache = () => (
  <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
    <StackNavigation/>
  </ApplicationProvider>
);

export default Ache;
