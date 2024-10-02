// ==UserScript==
// @name         ipharmacy_autorefresh
// @namespace    http://lifecapital.eg
// @version      0.4
// @description  I-Pharmacy Autorefresh
// @author       Mustafa Elmalah
// @match 		*://portal.i-pharmacy.app/*
// @run-at document-start
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lifecapital/userscript/refs/heads/master/ipharmacy_autorefresh.user.js
// @updateURL    https://raw.githubusercontent.com/lifecapital/userscript/refs/heads/master/ipharmacy_autorefresh.user.js
// ==/UserScript==

(function() {
    'use strict';

	let id = null;

	const proc = () => {
        clearTimeout(id);

        if(id) {
            console.debug("RELOAD");
            window.location.reload();
        }
        id = setTimeout(proc, 30000);
	};

	proc();

})();
