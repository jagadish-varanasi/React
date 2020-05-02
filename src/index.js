
//Import react and reactdom

import React from 'react'
import ReactDOM from 'react-dom'

//create a component either class or function....Her we are creating function
const App=()=>{
     return <div>Hi there!!</div>
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
); 