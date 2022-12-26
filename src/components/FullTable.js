import TableHeader from "./TableHeader";
import TableLine from "./TableLine";
import React from 'react'



export default function FullTable(props) {
    



    //const info = ['501131868', '2', '001765', 'Transocean Spitsbergen', 'Z-3', '1627', 'L.O057C.019.15A02N141', 'T.O057C.ZB.00005', '9042003', '1C01', '4504143790', '20', '1787/1788', '963102', 'TUBING,4 1/2&quot;,12,6#,SM25CRU,VT,R2', '13', '', '', '']
   

    return (
        <div className="tabell">
            <table>
                <TableHeader headers={props.info[0]} />
                {props.info[1][0] && props.info[1].map(l => <TableLine info={l} onGenerate={props.onGenerate} />)}
            </table>
        </div>
    )
}