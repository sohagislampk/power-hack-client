import React, { createContext, useEffect, useState } from 'react';


export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const setUserEmail = (email) => {
        setUser(email)
    }

    const authInfo = {
        user,
        setUserEmail
    }

    return (
        <div>
            <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
        </div>
    );
};

export default AuthProvider;