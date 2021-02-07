import React from 'react';
import Dashboard from '../screens/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const { Navigator, Screen } = AppStack;

const AppRoutes = () => {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Dashboard' component={Dashboard} />
        </Navigator>
    );
}

export default AppRoutes;