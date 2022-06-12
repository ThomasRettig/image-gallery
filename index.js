const testFolder = "./images";
const fs = require("fs");

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    const content = `<!DOCTYPE html>
<html>
  <head>  
    <style>
      img {
          max-width: 100%;
      }
    </style>
  </head>
  <body>
    <img src="images/${file}" alt="${file}">
  </body>
</html>`;
    fs.writeFile("index.html", content, err => {
      // file written successfully
    });
  });
});