const fs = require('fs');
const path = require('path');
const ics = require('ics');

dataSourceFile = path.resolve(__dirname, '../data.json');
destinationFile = path.resolve(__dirname, '../calendar.ics');

console.info(`destination: ${destinationFile}...`);
console.info(`data source: ${dataSourceFile}...`);

const data = require(dataSourceFile);

ics.createEvents(data, (error, value) => {
  if (error) {
    console.error(error);
    process.exit(1);
  } else {
    fs.writeFileSync(destinationFile, value);
  }
});
