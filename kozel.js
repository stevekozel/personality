if($.browser.webkit){
  var objectOutput = '';
  $('.kozel-popover').each(function(i,popover){
    objectOutput = objectOutput + '<object class="hiddensvg" height="1" width="1" data="'+$(popover).attr("src")+'" type="image/svg+xml" style="width: 1px;height: 1px;pointer-events: none;opacity: 0;overflow: hidden;"></object>';
  });
  $('body').append(objectOutput);
}
