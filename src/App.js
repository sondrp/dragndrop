import './App.css';
import DragDrop from './components/DragDrop';
import NavBar from './components/NavBar';
import React from 'react';
import FullTable from './components/FullTable';
import { FileUploader } from "react-drag-drop-files";
import Printable from './components/Printable';

function App() {

function stripHeader(line) {
  const headers = line.split("</th><th>").map(i => i.replace(/<[^>]+>/g, ""))
  return headers
}

function stripItems(line) {
  return line.split("</tr><tr>").map(i => i.split("</td><td>").map(e => e.replace(/<[^>]+>/g, "")))
}

function handleFileInput(file) {

  if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8")
      reader.onload = function (evt) {
          
          let stripped = reader.result
          for (let line of stripped.split("\n")) {
              if (line.includes("Returnummer")) {
                  let [headers, items] = line.split("</tr></thead><tbody><tr>")

                  headers = stripHeader(headers)
                  items = stripItems(items)
                  setInfo([headers, items])
          }
        }
      }
    }
}
  const [info, setInfo] = React.useState([[], []])
  const [skilt, setSkilt] = React.useState("")

  
  
  

  function makeSkilt(info) {
    let result = info[14] + "\n" + "WYYK:RIGGRETUR\tANT:\nSAP:" + info[13] + "\tITIMS.NR:          \nK.NR:" + info[16] + "\nANK.DATO:\tLOK\nSING:\tDATO:"
    setSkilt(result)
  }






  return (
    <div className='app'>
      <NavBar />
      <FileUploader handleChange={file => handleFileInput(file)} name="file" types={["html"]} />
      <FullTable info={info} onGenerate={(i) => makeSkilt(i)} />
      <textarea className='textarea' value={skilt} ></textarea>


      <div className='center'>
        <Printable />
      </div>
    </div>
  );
}

export default App;
