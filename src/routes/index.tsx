import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthContext from '../contexts/auth';

import { createStackNavigator } from '@react-navigation/stack';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {

    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                <ActivityIndicator size='large' color='red' />
            </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;



}