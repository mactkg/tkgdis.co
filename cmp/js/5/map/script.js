g = {};
g.distance = 0;
g.APP_ID = "dj0zaiZpPXNNbXR5Z1RBZnBSYyZzPWNvbnN1bWVyc2VjcmV0Jng9ZDQ-";

$(function() {
  g.ymap = new Y.Map("map");
  var control = new Y.CenterMarkControl();
  g.ymap.addControl(control);
  g.ymap.drawMap(new Y.LatLng(35.706962,139.659547), 17, Y.LayerSetId.NORMAL);

  g.ymap.bind('movestart', function() {
    g.pPos = g.ymap.getCenter();
  });

  g.ymap.bind('moveend', function() {
    g.distance += g.ymap.getCenter().distance(g.pPos);
    console.log(g.distance);
    var buf = g.distance.toFixed(3);
    if(g.distance > 7.663) {
      var earth = (buf/40075.).toFixed(5);
      $('#info').text("あなたがスクロールした距離は: " + buf + "km (地球" + earth + "周分)");
    } else {
      var dome = (buf/0.7663).toFixed(5);
      $('#info').text("あなたがスクロールした距離は: " + buf + "km (東京ドーム" + dome + "周分)");
    }
  });
});
