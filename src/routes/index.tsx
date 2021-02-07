import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import CreateDataUser from '../screens/Data';
import SignIn from '../screens/SignIn';
import AuthRoutes from './auth.routes';

export default function Routes() {
    return <AuthRoutes />;
}