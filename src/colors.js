import React from 'react'

import rgbtohex from './transfercolor';
export default function Color(props) {
    console.log("from colos");
    console.log(props.c.rgb);
    return (
      
        <div className="colorbox" style={{ backgroundColor:`rgb(${props.c.rgb.join(',')})`}}>
            <h1>{rgbtohex(props.c.rgb)}</h1>
            <h3>{props.c.weight}%</h3>
        arwa
      </div>
    );
}
