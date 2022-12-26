import React from 'react'

export default function TableLine(props) {

    const [details, setDetails] = React.useState(props.info)


    function handleChange(event, index) {
        let updated = details.map((info, i) => i === index ?  event.target.innerHTML : info)
        console.log(details)
        console.log(updated)
        
        setDetails(updated)
    }


    return (
        <tr>
            {props.info.map((info, i) => (
                <td key={i} onInput={event => handleChange(event, i)} contentEditable='true'>{info}</td>
                ))}
            <td><button onClick={() => props.onGenerate(details)}>generer</button></td>
        </tr>
    )
}
