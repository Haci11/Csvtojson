// Här hämtar den modulen.
let csvToJson = require('convert-csv-to-json');
// Här så hittar den filerna.
let fileInputName = 'csvex.csv';
let fileOutputName = 'myOutputFile.json';
// Här skickar den informationen till ett annat file som kommer göra den till json file.
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
