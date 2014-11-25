var tweets = {};
var selectTweet = function() {
  html = $('#theTmpl').render(tweets[Math.floor(Math.random()*tweets.length)]);
  $('#wrapper').html(html);
  $('#wrapper').hide();
  setTimeout(function() {
    $('#wrapper').show('drop', 500);
    
    $('#progress').progressbar();
    var progress = setInterval(function() {
      var v = $('#progress').progressbar("value") + .263157895;
      $('#progress').progressbar('value', v);
      if(v >= 100) { clearInterval(progress); selectTweet(); }
    }, 10);
    
  }, 200);
}

$(function() {
  var shaking = function(selector) {
    $(selector).toggle('shake', 100);
    setTimeout(shaking, 200, selector);
  }
  shaking("h1");
  
  $.getJSON('http://twitcher.steer.me/user_timeline/nakamura?key=7ah6zjvj', function(data) {
    tweets = data;
    selectTweet();
  });
});