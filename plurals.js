var _cp = [
	function(n, ord) {
		if (ord) return 'other';
		return 'other';
	},
	function(n, ord) {
		if (ord) return 'other';
		return (n == 1) ? 'one' : 'other';
	},
	function(n, ord) {
		if (ord) return 'other';
		return ((n == 0 || n == 1)) ? 'one' : 'other';
	},
	function(n, ord) {
		var s = String(n).split('.'), v0 = ! s[1];
		if (ord) return 'other';
		return (n == 1 && v0) ? 'one' : 'other';
	}
];

module.exports = {
	da: function(n, ord) {
		var s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n;
		if (ord) return 'other';
		return (n == 1 || ! t0 && (i == 0
		|| i == 1)) ? 'one' : 'other';
	},
	de: _cp[3],
	en: function(n, ord) {
		var s = String(n).split('.'), v0 = ! s[1], t0 = Number(s[0]) == n,
			n10 = t0 && s[0].slice(- 1), n100 = t0 && s[0].slice(- 2);
		if (ord) return (n10 == 1 && n100 != 11) ? 'one'
			: (n10 == 2 && n100 != 12) ? 'two'
				: (n10 == 3 && n100 != 13) ? 'few'
					: 'other';
		return (n == 1 && v0) ? 'one' : 'other';
	},
	es: _cp[1],
	fi: _cp[3],
	fr: function(n, ord) {
		if (ord) return (n == 1) ? 'one' : 'other';
		return (n >= 0 && n < 2) ? 'one' : 'other';
	},
	it: function(n, ord) {
		var s = String(n).split('.'), v0 = ! s[1];
		if (ord) return ((n == 11 || n == 8 || n == 80
		|| n == 800)) ? 'many' : 'other';
		return (n == 1 && v0) ? 'one' : 'other';
	},
	lv: function(n, ord) {
		var s = String(n).split('.'), f = s[1] || '', v = f.length,
			t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(- 1),
			n100 = t0 && s[0].slice(- 2), f100 = f.slice(- 2), f10 = f.slice(- 1);
		if (ord) return 'other';
		return (t0 && n10 == 0 || (n100 >= 11 && n100 <= 19)
			|| v == 2 && (f100 >= 11 && f100 <= 19)) ? 'zero'
			: (n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11
				|| v != 2 && f10 == 1) ? 'one'
				: 'other';
	},
	nl: _cp[3],
	root: _cp[0],
	ru: function(n, ord) {
		var s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1),
			i100 = i.slice(-2);
		if (ord) return 'other';
		return (v0 && i10 == 1 && i100 != 11) ? 'one'
			: (v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12
				|| i100 > 14)) ? 'few'
				: (v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9)
					|| v0 && (i100 >= 11 && i100 <= 14)) ? 'many'
					: 'other';
	},
	sv: function(n, ord) {
		var s = String(n).split('.'), v0 = ! s[1], t0 = Number(s[0]) == n,
			n10 = t0 && s[0].slice(- 1), n100 = t0 && s[0].slice(- 2);
		if (ord) return ((n10 == 1
		|| n10 == 2) && n100 != 11 && n100 != 12) ? 'one' : 'other';
		return (n == 1 && v0) ? 'one' : 'other';
	},
	tr: _cp[1]
};
