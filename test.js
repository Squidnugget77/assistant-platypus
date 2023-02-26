const fs = require('fs');

const filename = 'data.json';

fs.watchFile(filename, () => {
  fs.readFile(filename, (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Do something with the data
    console.log(jsonData);
  });
});