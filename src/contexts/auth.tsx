import React, {createContext} from 'react';
import * as api from '../api/Firebase';

interface AuthContextData{
    signed: boolean;
    user: object;
    signIn(email : string, senha: string): {};
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const { Provider } = AuthContext;

export function AuthProvider({ children } : any) {

    async function signIn(email: string, senha: string){
        const response = await api.signIn(email, senha);
        return response;
    }

    return(
        <Provider value={{ signed : false, user: {}, signIn }}>
            {children}
        </Provider>
    )
}

export default AuthContext; 