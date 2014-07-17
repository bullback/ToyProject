function putDom() {
  var elem = $("<div></div>");
  
  elem.attr({
    'id': 'elem_id',
  });

  elem.css({
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'width': '50px',
    'height': '50px',
    'margin-top': '-25px',
    'margin-left': '-25px',
    'z-index': '10000',
    'border': '1px solid #000000',
    'background-color': '#ffffff',
  });

  elem.appendTo('body');

  return;
}