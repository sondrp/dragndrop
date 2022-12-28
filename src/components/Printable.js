import { ReactToPrint } from 'react-to-print'
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';


export default function Printable() {

    const [text, setText] = React.useState("")

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
        <div>
            <textarea onInput={evt => setText(evt.target.value)}></textarea>
            <ComponentToPrint ref={componentRef} text={text} />
            <button onClick={handlePrint}>Print</button>
        </div>
    )
}