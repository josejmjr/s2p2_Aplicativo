import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import Login from '../pages/Login'
import Home from '../pages/Home';
import About from '../pages/About';
import Setting from '../pages/Setting';
import Help from '../pages/Help';

import CustomDrawer from '../components/CustomDrawer';

const Routes = createAppContainer(
  createDrawerNavigator({
    Login,
    Home,
    About,
    Setting,
    Help,
  }, {
      initialRouteName: 'Login',
      contentComponent: CustomDrawer,
    })
);

export default Routes;