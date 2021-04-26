let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};

//write a for...in loop that will iterate through above object and print out value of property if
//property starts with the letter r, or if the value of that property is an odd number

for(const property in statistics) {
  if((property.charAt(0) == 'r')||(statistics[property] % 2 == 1)) {
    console.log(`${property}: ${statistics[property]}`);
  }
}

//expected output
//21
//45
//5
//2