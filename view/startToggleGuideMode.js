(function() {
  
  	

	$("html").ready(function(){


		chrome.tabs.query({

			active: true,
			currentWindow: true
		}, function(tab) {

			if(tab != undefined && tab.length > 0){

				chrome.tabs.executeScript(tab[0].id, {
					code: "clickObject(); stopAtag(); drawShadowOnMouseOveredDOM();",
					allFrames: true
				});

			}else{

				console.log('You cannot toggle to the Making Guide Mode on this Tab!');
				alert('You cannot toggle to the Making Guide Mode on this Tab!');
			}
		});

	});

})();