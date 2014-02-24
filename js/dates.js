var today=new Date
today.getDay()

function checkWeekend(date)
{
if(today.getDay==0 || today.getDay==6)
{
document.write("today is a weekend")
}
else{
 document.write("today is a weekday")
 }
}
checkWeekend()
