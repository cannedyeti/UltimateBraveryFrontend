import React, { createContext, useState, useMemo } from 'react'

export const Context = createContext({
    patch: '',
    setPatch: () => {}
});

function ContextProvider(props) {
    const [patch, setPatch] = useState('');
    const value = useMemo(
        () => ({ patch, setPatch }), 
        [patch]
    );
    return (
         <Context.Provider 
            value={value}>
               {props.children}
         </Context.Provider>
    )
}
export default ContextProvider
