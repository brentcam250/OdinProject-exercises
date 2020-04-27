const ftoc = function(fahrenheit) {
  let celsius = ((fahrenheit -32) * (5/9));
  let oneDecimal = Math.round(celsius *10)/10;
  return oneDecimal;
}


//73.2
const ctof = function(celsius) {
  let fahrenheit = ((celsius * (9/5)) + 32);
  let oneDecimal = Math.round(fahrenheit *10) /10;
  return oneDecimal;
}

module.exports = {
  ftoc,
  ctof
}
