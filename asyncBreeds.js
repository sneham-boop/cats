const fs = require("fs");

const breedDetailsFromFile = (breed, callback) => {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("Got the data!!!!!");
    if (!error) callback(data);
  });
};

const bombay = breedDetailsFromFile("Bombay", (data) => {
  console.log("Return Value: ", data);
  // return data;
});
// console.log("Return Value: ", bombay);
