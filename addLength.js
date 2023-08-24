const stringLength = (string) => {
  
  const splitString = string.split("");
  let i = 0;
  const error ='error';
    if (splitString.length != 0 & splitString.length <= 10) {
      splitString.forEach((element) =>  {
      i++;
    })
      return i;
  }
    else {
      return error;
    }
};

module.exports = stringLength  