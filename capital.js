const initializeCapital = (string) => {
    const array = string.split("");
    array[0] = array[0].toUpperCase();
    capitalString = array.join("");  
    return capitalString;
  }

  module.exports = initializeCapital
