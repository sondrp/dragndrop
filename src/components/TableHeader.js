

export default function TableHeader(props) {


    return (
        <thead>
            <tr>
                {props.headers.map(h => (<th>{h}</th>))}
                <th>Lag skilt</th>
            </tr>
    </thead>
    )
}