class Calculate {
  add(a,b) {
    return a+b;
  }
  subtract (a,b) {
    return a-b;
  }
  multiply  (a,b) {
    return a*b;
  }
  divide (a,b) {
    const error = "Not possible to divide by zero"
      if (b===0){
        return error;
      }

    return a/b;
  }
}

module.exports = Calculate
