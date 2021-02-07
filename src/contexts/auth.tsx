import React, {createContext, useState} from 'react';
import * as api from '../api/Firebase';

interface AuthContextData{
    signed: boolean;
    user: object | null;
    signIn(email : string, senha: string): {};
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const { Provider } = AuthContext;

export function AuthProvider({ children } : any) {

    const [user, setUser] = useState<object | null>(null);

    async function signIn(email: string, senha: string){
        const response = await api.signIn(email, senha);
        const { usuario } = response?.val();
        setUser(usuario);
        return response;
    }

    function signOut(){
        setUser(null);
    } 

    return(
        <Provider value={{ signed : !!user, user , signIn, signOut }}>
            {children}
        </Provider>
    )
}

export default AuthContext; 