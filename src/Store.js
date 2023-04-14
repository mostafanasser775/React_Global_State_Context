import React, { useState } from 'react'

const initialState = {
    name: 'thomas',
    email: 'ahmed'
};

export const Context = React.createContext();

const Store = (props) => {
    const [state, setstate] = useState(initialState);
    return (
        <Context.Provider value={[state, setstate]}>{props.children}</Context.Provider>
    );
}
export default Store;