import React from 'react';
import GlobalStyle from './globalstyle';
import { Firstpage } from './src/Firstpage';

export const App=()=>
{
    return(
        <>
        <GlobalStyle/>
       <Firstpage/>
        </>
    )
}

// ReactDOM.render(<App/>, document.getElementById("app"));