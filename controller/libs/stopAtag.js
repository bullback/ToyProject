function stopAtag() {
	$("a").click(function(event) {
  	event.preventDefault();});
	$("a > *").click(function(event) {
	event.preventDefault();});
};

