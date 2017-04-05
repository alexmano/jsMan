/*
***	 Author: alex.manolescu@yahoo.com
***	 jsMan is under GPL Licence, https://github.com/alexmano/jsMan/blob/master/LICENSE
***  Compatible with IE8+ 
*/

var jsMan = {};
(function(){
	let that = this;
	let docLoaded = false;
	let xhr = undefined;
	
	// Document loaded handler must be passed as docLoad function.	
	if (document.addEventListener) { 
		document.addEventListener('DOMContentLoaded', docLoad, false);
		docLoaded = true;
	} else if (document.attachEvent) {
		document.attachEvent("onreadystatechange", function(){
          if ( document.readyState === "complete" ) {
              document.detachEvent( "onreadystatechange", arguments.callee );              
			  docLoad();
			  docLoaded = true;
			}
		});
	}
	
	// Ajax pattern basic implementation for HTTP GET and POST.
	this.asyncGet = function(url, callback) {
		xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function() {
			if (xhr.status === 200) {
				callback(xhr.status, xhr.responseText);
			}
			else {
				callback(xhr.status, null);
			}
		};
		xhr.send();
	};
	
	this.asyncPost = function(url, data, callback) {
		xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onload = function() {
			if (xhr.status === 200 && xhr.responseText !== newName) {
				callback(xhr.status, xhr.responseText);
			}
			else if (xhr.status !== 200) {
				callback(xhr.status, null);
			}
		};
		try{ xhr.send(JSON.stringify(data)); }
		catch(err) { callback(500, err); }
	};
	
	// DOM manipulation and element retrieval by ID and class name.
	this.getElement = function(isID, name) {
		return isID ? document.getElementById(name) : document.getElementsByClassName(name)[0];
	};
}).apply(jsMan, docLoad);