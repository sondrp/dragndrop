

export default function TableLine(props) {

 


    return (
        <tr>
            {props.info.map(i => (
                <td contentEditable='true'>{i}</td>
                ))}
            <td><button>generer</button></td>
        </tr>
    )
}
