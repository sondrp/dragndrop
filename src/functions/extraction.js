function getHeaders(line) {
    return line.split("</th><th>").map(i => i.replace(/<[^>]+>/g, ""))
  }
  
  // splits the main contents of the table into an array of array
  // each inner array should be of size 19
  function getItems(line) {
    return line.split("</tr><tr>").map(i => i.split("</td><td>").map(e => e.replace(/<[^>]+>/g, "")))
  }
  
  
  
  function extractFromFile(file) {
  
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8")
        reader.onload = function (evt) {
            
            let stripped = reader.result
            for (let line of stripped.split("\n")) {
                if (line.includes("Returnummer")) {
                    let rows = line.split("</th></tr>")
  
                    let headers = getHeaders(rows[0])         
                    let info = getItems(rows[1])
                    return headers
            }
          }
        }
    }
  }
  
  