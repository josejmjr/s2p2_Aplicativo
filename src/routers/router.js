import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

import Login from '../pages/Login'
import Home from '../pages/Home';
import Tarefas from '../pages/Task'
import Sobre from '../pages/About';
import Configurações from '../pages/Setting';
import Ajuda from '../pages/Help';

import CustomDrawer from '../components/CustomDrawer';

const Routes = createAppContainer(
  createDrawerNavigator({
    Home,
    Tarefas,
    Sobre,
    Configurações,
    Ajuda,
    Login,
  }, {
      initialRouteName: 'Login',
      contentComponent: CustomDrawer,
      backBehavior: "none",
    })

);

export default Routes;