const XLSX = require("xlsx");
 
function readExcel() {
    const workbook = XLSX.readFile('C:/Users/chand/OneDrive/Desktop/testdata.xlsx');
    const sheet = workbook.Sheets['First'];
    return XLSX.utils.sheet_to_json(sheet);  // Convert the sheet to JSON
}
 

module.exports = { readExcel };