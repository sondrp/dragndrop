
function strip(line) {
    const headers = line.split("</th><th>").map(i => i.replace(/<[^>]+>/g, ""))
    return headers
  }


export default function getHeaders(file) {
    let headerLine = "wow amazing"

    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8")
        reader.onload = function (evt) {
            
            let stripped = reader.result
            for (let line of stripped.split("\n")) {
                if (line.includes("Returnummer")) {
                    headerLine = line.split("</tr></thead><tbody><tr>")[0]
            }
          }
        }
      }
    return headerLine
}