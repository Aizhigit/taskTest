function checkTime(i)
{
if (i<10) 
{
i="0" + i;
}
return i;
}
var t = new Date();
console.log(`"${checkTime(t.getHours())} ${":"} ${checkTime(t.getMinutes())} ${":"} ${checkTime(t.getSeconds())}"`);