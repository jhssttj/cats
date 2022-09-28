// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callBackFunction) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callBackFunction(data);
    if(error) callBackFunction(undefined);
  });
};

const printOutCatBreed = function(data) {
  console.log('Return Value: ', data); 
};

module.exports = breedDetailsFromFile;