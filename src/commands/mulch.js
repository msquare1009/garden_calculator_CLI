const fs = require('fs');
const { Command } = require('commander');

const { mulchCalculator, fromCubicsToLitres } = require('../utils/calculator');


const mulchCommand = new Command('mulch');

//Creates CLI arguments
mulchCommand
  .description('Calculates mulch needed for a given area')
  .argument('<length>', 'length of your parcel in m')
  .argument('<width>', 'width of your parcel in m')
  .argument('<depth>', 'desired depth of mulch in cm')
  .option('-o, --output <file>', 'outputs the rusult in a file')
  .action((length, width, depth, options) => {
    //Checks if input is numerical
    if (isNaN(length) || isNaN(width) || isNaN(depth)) {
      console.error('All arguments must be numbers');
      process.exit(1);
    }
    //Checks if values are positive
    if (length <= 0 || width <= 0 || depth <= 0) {
      console.error('All values must be positive');
      process.exit(1);
    }
    const cubic = mulchCalculator(Number(length), Number(width), Number(depth));
    const bags = fromCubicsToLitres(cubic);

    console.log(`You need: 
      ${cubic} cubic meters (m^3) of mulch for your area, 
      or equivalent of ${bags} bags of 50 liters`);

    //Writes to the output file
    if (options.output) {
      fs.writeFile(
        options.output,
        `You need ${cubic} cubic meters or ${bags} bags of mulch`,
        (err) => {
          if (err) {
            console.error('Error writing file:', err.message);
            return;
          }
          console.log(`Saved to ${options.output}`);
        }
      )
    }
  });


module.exports = mulchCommand;