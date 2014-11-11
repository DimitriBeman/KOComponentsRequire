console.log("utils.js");

var _utils = (function(){
	return {
		alert: function(message){ alert("--- utils.myalert ---"+message); },
		log:  function(message){ console.log("--- utils.console ---"+message); }
	};
})();

define(_utils);