var input= prompt("enter a number 0 to 15")
input=parseInt(input,10)
//check for valid input
while(input<0 || input>15 || isNaN(input))
{
input=prompt("whoops!try again")
input=parseInt(input)
}
//convert to hex


  function ConvertDecToHex(dec)
{
var local="the function did" + dec
  return local
console.log(local)//undefined
}
 //function defination 
function ConvertDecToHex(dec)
{
if (dec>=0 && dec <=9)
{ 
 return dec
  } 
if(dec==10)
{
  return "A"
 }
else if(dec==11)
{
  return "B"
 }
else if(dec==12)
{
  return "C"
 }
else if(dec==13)
{
  return "D"
 }
else if(dec==14)
{
  return "E"
 }
else if(dec==15)
{
  return "F"
 }
}

var hex=ConvertDecToHex(input);
alert(input + "is" +hex +"in hex");









