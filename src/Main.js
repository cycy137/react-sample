import React from 'react';
import './App.css';
const Main=(props)=>(
    <div style={{display:'inline-block'}}>
    <div className={`Mainc ${props.content? '':'hid'}`}>
        HelloＷｏｒｌｄ
    </div>
    <div className='color'></div>
    </div>

);
export default Main;