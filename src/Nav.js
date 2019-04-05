import React from 'react';
import './App.css';
const Nav=(props)=>(
    <div className='Navc'>
        <input type='button' onClick={()=>{props.handleChangeclimate(props.navalue)}} value={props.navalue}/>
    </div>
);
export default Nav;
