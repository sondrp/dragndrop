import React from 'react'


export default function Skilt(props) {

    const [info, setInfo] = React.useState([])

    const [sap, desc, count, contract, invoice, lok] = props.text.split("\t") 
    return (
        <div className="skilt">

            <div className='text'>----</div>
            <div className='text'>{desc}</div>
            <div className='text'>WYYK:RIGGRETUR</div>
            <div className='text'>ANT:</div>
            <div className='text'>SAP:{sap}</div>
            <div className='text'>ITIMS.NR:</div>
            <div className='text'>K.NR:{contract}</div>
            <div className='text'>LOK:</div>
            <div className='text'>SIGN:DATO:</div>
            <div></div>

        </div>
    )
}