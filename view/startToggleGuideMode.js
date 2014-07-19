(function() {
  
  	

	$("html").ready(function(){


		// chrome.tabs.getCurrent(function(tab) {


		// 	console.log(tab);
		// 	// if(tab.id != undefined){

		// 	// 	chrome.tabs.executeScript(tab.id, {

		// 	// 		code: "alert(dd);",
		// 	// 		allFrames: true

		// 	// 	});

		// 	// }else{

		// 	// 	alert('You cannot toggle to the Making Guide Mode on this Tab!');
		// 	// }

		// });

		chrome.tabs.query({

			active: true,
			currentWindow: true
		}, function(tab) {

			if(tab != undefined && tab.length > 0){

				//console.log(tab[0].id);
				chrome.tabs.executeScript(tab[0].id, {
					code: "drawShadowOnMouseOveredDOM();",
					allFrames: true
				});

			}else{

				console.log('You cannot toggle to the Making Guide Mode on this Tab!');
				alert('You cannot toggle to the Making Guide Mode on this Tab!');
			}
		});

	});

})();