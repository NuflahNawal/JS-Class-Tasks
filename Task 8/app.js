// var today = new Date ()
// var todayStr = today.toString()
// var day = todayStr.slice(0,3)
// var date = todayStr.slice(4,16)
// var time = todayStr.slice(16 , 25)

// console.log (typeof today, today)
// console.log (typeof todayStr, todayStr)
// console.log (date)
// console.log (day)
// console.log (time)

var ramdan = new Date ("Sunday, February 7, 2027");
var ramdanTime = ramdan.getTime();
var ramdanHours = ramdan.getDay();
console.log (ramdan)
console.log (ramdanTime)
console.log (ramdanTime / ramdanHours)