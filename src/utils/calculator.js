function mulchCalculator(length, width, depth) {
  return length * width * (depth / 100);
}

//Convert to 50 liter bags
function fromCubicsToLitres(cubicMeters) {
return (cubicMeters * 1000) / 50;
}


module.exports = {mulchCalculator, fromCubicsToLitres};