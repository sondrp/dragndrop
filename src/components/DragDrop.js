import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["html"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);



    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8")
        reader.onload = function (evt) {
/*             document.getElementById("fileContents").innerHTML = evt.target.result; */
          var stripped = reader.result.replace(/<[^>]+>/g, "");


          for (let line of stripped.split("\n")) {
            if (line.substring(0, 5) === "Retur") {
              console.log(line)
            }
          }
        }
    }
  };


  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;