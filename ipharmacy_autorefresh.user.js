// ==UserScript==
// @name         ipharmacy_autorefresh
// @namespace    http://lifecapital.eg
// @version      0.8
// @description  I-Pharmacy Autorefresh
// @author       Mustafa Elmalah
// @match 		 https://portal.i-pharmacy.app/app/home
// @run-at document-start
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lifecapital/userscript/refs/heads/master/ipharmacy_autorefresh.user.js
// @updateURL    https://raw.githubusercontent.com/lifecapital/userscript/refs/heads/master/ipharmacy_autorefresh.user.js
// ==/UserScript==

(function() {
    'use strict';

	let id = null;

	const urls = [
		"https://portal.i-pharmacy.app/app/home",
	];

	const proc = () => {
		if(id)
			clearTimeout(id);

		if(urls.indexOf(window.location.href.replace(/\/$/, "")) !== -1) {
			if(id) {
				console.debug("RELOAD");
				window.location.reload();
			}
		}

		id = setTimeout(proc, 30000);
		console.debug("REARMED");
	};

	proc();

})();
