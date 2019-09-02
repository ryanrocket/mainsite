var MA_USING = [],
	MA_LOCAL = {},
	MA_HARDCOPY = {
		students: [ 'ryanwans', 'jackwoods' ],
		schema: {
			ryanwans: {
				perm: 'admin',
				classlist: {
					A: [],
					B: []
				}
			},
			jackwoods: {
				perm: 'user',
				classlist: {
					A: [],
					B: []
				}
			}
		},
		config: {
			commons: {
				dayStart: '',
				classLength: '',
				dayEnd: '',
				classBreak: '',
				classPerDay: '',
				checkAddition: true
			},
			dispTime: '12hr/?fail/24hr',
			responsive: false,
			regexTime: '/^h:%m*m$:(t)| |(am)||(pm)/g',
			reloadTime: '1sec/?fail/0.5sec'
		}
	};

export function use(a) {
	MA_USING.push(a);
	(function() {})();
}
export function grabData(a) {
	if (a) {
		let A = moment();
		if (A !== null) {
			MA_LOCAL['date'] = A.format('LL');
			MA_LOCAL['time'] = A.format('LTS');
		}
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
