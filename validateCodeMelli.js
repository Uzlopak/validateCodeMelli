function validateCodeMelli(code) {
	var checksum = 0;
  var generatedChecksum = 0;
  var rest = 0;
	if (code.length != 10) {
  	return false;
  }
  if (isObviousWrongCode(code)) {
  	return false;
  }
  
  generatedChecksum = generateChecksum(code.substring(0,9));
  rest = generatedChecksum - parseInt(generatedChecksum / 11) * 11;
  checksum = code.charAt(9);
  if ((rest == 0 && checksum == 0) ||
  		(rest == 1 && checksum == 1) ||
      (rest > 1 && checksum == 11 - rest))
  	{
    return true;
  	}
  return false;
}

function isObviousWrongCode(code)
{
	if (code.length != 10) {
  	throw ("Code-Length invalid")
  }
	if (code == '0000000000' ||	
  		code == '1111111111' ||
  		code == '2222222222' ||	
      code == '3333333333' ||	
      code == '4444444444' ||	
      code == '5555555555' ||	
      code == '6666666666' ||	
      code == '7777777777' ||	
      code == '8888888888' ||	
      code == '9999999999') {
  	return true;
  }
  return false;
}

function generateChecksum(code)
{
  var generatedChecksum = 0;
	if (code.length != 9) {
  	throw ("Code-Length invalid")
  }
  for (i = 0; i<9; i++) 
  {
  	generatedChecksum += parseInt(code.charAt(i)) * (10 - i);
  }
  return generatedChecksum;	
}
