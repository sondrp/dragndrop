import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";


function getHeaders(line) {
  return line.split("</th><th>").map(i => i.replace(/<[^>]+>/g, ""))
}

function getItems(line) {
  let linearray = line.split("</tr><tr>").map(i => i.split("</td><td>").map(e => e.replace(/<[^>]+>/g, "")))
  console.log(linearray)
}



export default function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);


    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8")
        reader.onload = function (evt) {

          let stripped = reader.result
          //var stripped = reader.result.replace(/<[^>]+>/g, "");

          // line.substring(0, 5) === "Retur")
          for (let line of stripped.split("\n")) {
            if (line.includes("Returnummer")) {
              let rows = line.split("</th></tr>")

              const headers = getHeaders(rows[0])
              const items = getItems(rows[1])



            }
          }
        }
    }
  };
  
  return (
    <FileUploader handleChange={handleChange} name="file" types={["html"]} />
  );
}
