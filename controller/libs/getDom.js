function getDom() {
  function returnIntVal(val) {
    if(typeof val == 'string') {
      return parseInt(val.replace(/[^-\d\.]/g, ''));
    } else {
      return val;
    }
  }

  $(document).mouseup(function(event) {
    if($('#elem_id').length != 0) { 
      $('#elem_id').remove();
    }

    var target = jQuery(event.target);

    var offset = {
      top: returnIntVal(target.offset().top) + returnIntVal(target.css('padding-top')),
      left: returnIntVal(target.offset().left) + returnIntVal(target.css('padding-left')),
      width: returnIntVal(target.innerWidth()) - returnIntVal(target.css('padding-left')) - returnIntVal(target.css('padding-right')),
      height: returnIntVal(target.innerHeight()) - returnIntVal(target.css('padding-top')) - returnIntVal(target.css('padding-bottom')),
    }

    var elem = $("<div></div>");

    elem.attr({
      'id': 'elem_id',
    });

    elem.css({
      'position': 'absolute',
      'top': offset.top,
      'left': offset.left,
      'width': offset.width,
      'height': offset.height,
      'z-index': '10000',
      'border': '1px solid #000000',
      'background-color': 'rgba(255, 255, 255, 0)',
    });

    elem.appendTo('body');
  });

  return;
}