function formatDate (timeInSeconds) {

	if(timeInSeconds === undefined){
		return '0s';
	}

	let hour = Math.floor(timeInSeconds / 3600);
	let minute = Math.floor((timeInSeconds - hour * 3600) / 60) ;
	let second = Math.floor(timeInSeconds % 60);


	let format = '';

	if(hour !== 0){
		format += `${hour}h`;
	}

	if(minute !== 0){
		format += ` ${minute}m`;
	}

	if(second !== 0){
		format += ` ${second}s`;
	}

	format = format.trim();

	return format;

}



module.exports = formatDate;
