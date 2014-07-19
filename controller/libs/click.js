function clickObject() {

//Create an empty overlay object
var $overlay = $("<div></div>");

//Create an empty speech bubble object
var $bubble = $("<div></div>");

var $text = $("<p></p>")

//Create a target object which represents selected target
var $target = {
	target:null,
	offsetX:null,
	offsetY:null,
	outerWidth: null,
	outerHeight: null
};

//Creates a document target which contains numbers pertaining to the given document
var $document = {
	outerWidth:null,
	outerHeight:null
};

//Measures size of the document and puts them into $document variable
function measureDocument () {
	$document["outerWidth"] = $(document).outerWidth();
	$document["outerHeight"] = $(document).outerHeight();
};

function modifyOverlay (x, y, w, h) {
	$($overlay).css("left", x-4).css("top", y-4).css("width", w).css("height", h).attr("id", "overlay").css("position", "absolute").css("border", "2.5px dashed #B8CB99").css("z-index", "10000");
};

function modifyBubble (x, y, w, h) {
	$($bubble).css("position", "absolute").css("left", x+(w/4)).css("top", y-120).css("width", "300").css("height", "100").css("background-color", "rgba(248,80,50,1)").attr("id", "bubble").css("z-index", "10000");
};

$("body").append($overlay);
$("body").append($bubble);
$($bubble).append($text).text("This is a test").css("color", "white").css("text-align", "center").css("font-size", "2em")

$(document).on("click", function(event){
	$target["target"] = event.target;
	var clicked = $($target["target"]);
	$target["offsetX"] = clicked.offset().left;
	$target["offsetY"] = clicked.offset().top;
	$target["outerWidth"] = clicked.outerWidth();
	$target["outerHeight"] = clicked.outerHeight();
	modifyOverlay($target["offsetX"], $target["offsetY"], $target["outerWidth"], $target["outerHeight"]);
	modifyBubble($target["offsetX"], $target["offsetY"], $target["outerWidth"], $target["outerHeight"]);
	$($overlay).toggle();
	$($bubble).toggle();
});
};
