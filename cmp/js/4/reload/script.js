console.log("okok");
$.getJSON('http://twitcher.steer.me/user_timeline/nakamura?key=7ah6zjvj', function(data) {
  console.log(data);
  var html = $('#theTmpl').render(data[Math.floor(Math.random()*data.length)]);
  $('#wrapper').replaceWith(html);
});