import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../api/Firebase';


interface User{
    nome: string;
    email: string;
}
interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(email: string, senha: string): {};
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const { Provider } = AuthContext;

export function AuthProvider({ children }: any) {

    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorage() {
           const storageUser = await AsyncStorage.getItem('@AuthContx:user');
            const storageToken = await AsyncStorage.getItem('@AuthContx:token');

            if(storageUser && storageToken){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }

        loadStorage();
    })

    async function signIn(email: string, senha: string) {
        const response = await api.signIn(email, senha);
        const { usuario, token } = response?.val();

        setUser(usuario);
        await AsyncStorage.setItem('@AuthContx:user', JSON.stringify(usuario));
        await AsyncStorage.setItem('@AuthContx:token', token);
        
        return response;
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
        
    }

    return (
        <Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </Provider>
    )
}

export default AuthContext; 