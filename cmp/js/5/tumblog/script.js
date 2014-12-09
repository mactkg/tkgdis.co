d = {};
d.n = 0;
d.pending = [];
d.time = 0;
d.env = {
  TUMBLR_API: '8alyJ6m19cZD3MY62LUa4rvktkX5v1F9e5zD0f86r5mJ5026Dt'
};

$(function(){
  $('#get').on('click', function(e) {
    getPhoto($('input[name=url]')[0].value, d.n)
      .done(function() {
        $(window).bottom({ proximity: 0.1 });
        $(window).on('bottom', function() {
          if(d.pending.length > 3 || Date.now() - d.time < 2000) { return; }
          d.time = Date.now();
          d.n += 20;
          d.pending.push(d.n);
          getPhoto($('input[name=url]')[0].value, d.n)
        });
      });
  });

});

var getPhoto = function(url, offset){
  return $.getJSON('http://api.tumblr.com/v2/blog/'+url+'/posts/photo?api_key='+d.env['TUMBLR_API']+'&offset='+offset+'&jsonp=?').done(function(data) {
    $('#wrapper').append($("#theTmpl").render(data));
    d.pending.splice(d.pending.indexOf(offset));
  });
}
