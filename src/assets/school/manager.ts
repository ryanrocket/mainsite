var MA_USING = [],
	MA_LOCAL = {},
	MA_DB = {};

var fs = require('fs');

export function use(a) {
	MA_USING.push(a);
	(function() {})();
}
export function grabData(a, b) {
	if (a) {
		let A = moment();
		if (A !== null) {
			MA_LOCAL['date'] = A.format('LL');
			MA_LOCAL['time'] = A.format('LTS');
		}
		// let rawdata = fs.readFileSync('./sched.json');
		// MA_DB = JSON.parse(rawdata);
		MA_DB = b.default || b['default'];

		return 'db load complete';
	} else {
		console['warn']('Date Grabbing Disabled');
	}
}
export function replaceElm(a, b) {
	let g = document.querySelector(a);
	if (b === 'date') {
		g.innerText = MA_LOCAL.date;
	} else if (b === 'time') {
		g.innerText = MA_LOCAL.time;
	} else if (b === 'timenow') {
		g.innerHTML = 'TIME: &nbsp; <b>' + moment().format('h:mm:ss a') + '</b>';
	}
}

let managerinternals = {
	getName: function() {
		return window.location.search.split('?');
	}
};
