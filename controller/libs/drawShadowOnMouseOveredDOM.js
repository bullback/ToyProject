// written by LyuGGang on 14.07.20.
function drawShadowOnMouseOveredDOM() {

  var outlinedDOMoffset = null;
  var everyDOMs = document.getElementsByTagName("*");
  var originDOMstyle = new Array(everyDOMs.length);
  const SHADOW_SIZE = 10;
  const SHADOW_COLOR = "#3DB7CC";


  // for keep the original styles!
  for (var i=0; i<everyDOMs.length; i++){

    originDOMstyle[i] = {

      webkitBoxShadow: everyDOMs[i].style.webkitBoxShadow
    };

  
  }

  $(document).mousemove(function(event) {


    for (var i=0; i<everyDOMs.length; i++){

      if(everyDOMs[i] == $(document))
        continue;
      
      if(everyDOMs[i] == event.target){

        // set shadow
        everyDOMs[i].style.webkitBoxShadow = "inset 0 0 " + SHADOW_SIZE + "px " + SHADOW_COLOR;

      }else{

        // get rid of shadow
        everyDOMs[i].style.webkitBoxShadow = originDOMstyle[i].webkitBoxShadow;
      }

    }
  });

};