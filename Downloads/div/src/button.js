import React from "react";

export const Button=(props)=>
<button onClick={()=>props.clickEvent(props.updateStateMethod,props.stateVariable)}>{props.label}</button>