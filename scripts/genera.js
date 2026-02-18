const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "..", "escursioni");
const outputPath = path.join(__dirname, "..", "escursioni.json");

const files = fs.readdirSync(folderPath)
  .filter(file => file.toLowerCase().endsWith(".gpx"))
  .sort((a, b) => a.localeCompare(b, "it"));

const json = {
  escursioni: files.map(file => ({ file }))
};

fs.writeFileSync(outputPath, JSON.stringify(json, null, 2));

console.log("escursioni.json aggiornato correttamente!");
