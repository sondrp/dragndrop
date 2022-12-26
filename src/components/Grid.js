

export default function Grid() {

    const nums = [...Array(50).keys()]
    const headers = ['Returnummer', 'Retur-item', 'Inspeksjonsrapport', 'Rigg', 'Br&#248;nn', 'Plant', 'Br&#248;nn-WBS', 'Lager-WBS', 'Nettverk', 'Nettverkskode', 'PO', 'PO-item ', 'BS/KORG', 'SAP', 'Beskrivelse', 'Antall', 'Contract', 'Invoice', 'Lok']

    return (
        <div >
            <div className="grid-header">
                {headers.map((h, i) => (<div key={i}>{h}</div>))}
            </div>
        </div>
    )
}