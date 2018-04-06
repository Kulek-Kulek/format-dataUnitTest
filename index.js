function formatDate () {
  const os = require('os');


let uptime = (os.uptime());
let hour = `${uptime}` / 3600;
let minute = (`${hour}` - Math.floor(hour)) * 60;
let second = (`${minute}` - Math.floor(minute)) * 60;

if (`${uptime}` < 60) {
	console.log(Math.floor(`${second}`) + `s`)
} if (`${uptime}` >= 60 && `${uptime}` < 3600) {
	console.log(Math.floor(`${minute}`) + `m`, Math.floor(`${second}`) + `s`);
} if (`${uptime}` >= 3600) {
	console.log(`Current uptime is: ` + Math.floor(`${hour}`) + `h`, Math.floor(`${minute}`) + `m`, Math.floor(`${second}`) + `s`);
}
}



module.exports = formatDate;