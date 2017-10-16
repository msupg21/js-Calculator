
// variables for each use i.e. 1 x 1
  var value1 = [];
  var value2 = [];
  var operatorChoosen = '';



//functions for each opperand

$(window).ready(function(e){
  console.log("testing");
  var clear = $('#clear');
  var numbers = $('.number');
  var operandButtons = $('.operator');
  var decimal = $('#decmial');
  var equals = $('#equals');
  var display = $('#display');


  numbers.click(function(e){
    if(operatorChoosen === ''){
      console.log($(this).text())

      value1.push($(this).text())
    }
    else{
      console.log($(this).text())
      value2.push($(this).text());
    }
  })

  operandButtons.click(function(e){
    if(value1.length != 0 && value2.length != 0){
      calc();
      operatorChoosen = $(this).text();
    }
    else{
      operatorChoosen = $(this).text();
    }
  })

  clear.click(function(e) {
    console.log('clear');
    display.text("");
    value1 = [];
    value2 = [];
    operatorChoosen = '';
  });

});


//mathmatical operations
var calc = function() {
  var result = 0;
  console.log(operatorChoosen)
  switch (operatorChoosen) {
    case '+': result = parseFloat(value1) + parseFloat(value2);
    console.log(parseFloat(value1) + " " + operatorChoosen + " " + parseFloat(value2) + " = " + result)

      break;
    case '-': result = value1 - value2;
      break;
    case 'X': result = value1 * value2;
      break;
    case '/': result = value1 / value2;
      break;
    default:
  }
  $('#display').text(result);
  value1 = [];
  value2 = [];
  value1.push(result);
}
