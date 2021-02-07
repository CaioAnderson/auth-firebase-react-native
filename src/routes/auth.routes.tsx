import React from 'react';
import SignIn from '../screens/SignIn';

import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();


import CreateDataUser from '../screens/Data';

const AuthRoutes = () => {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='SignIn' component={SignIn} />
        </Navigator>
    );
}


export default AuthRoutes;