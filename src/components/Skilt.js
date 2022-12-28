import React from 'react'


export default function Skilt(props) {

    const [info, setInfo] = React.useState([])

    const [sap, desc, count, contract, invoice, lok] = props.text.split("\t") 
    return (
        <div className="skilt">

            <div className='desc'>{desc}</div>
            <div className='txt'>WYYK:RIGGRETUR</div>
            <div className='txt'>ANT:</div>
            <div className='sap'>SAP:{sap}</div>
            <div className='itims'>ITIMS.NR:</div>
            <div className='contract'>K.NR:{contract}</div>
            <div className='txt'>ANK.DATO:</div>
            <div>LOK:</div>
            <div>SIGN:</div>
            <div>DATO:</div>

        </div>
    )
}