google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(drawChart); //callback
data={};
function drawChart() {
  $.getJSON('http://twitcher.steer.me/search?q=soundcloud&key=7ah6zjvj', function(results) {
    tweets = results;
    for (var i=0; i < results.length; i++) {
      if(data[results[i]['user']['time_zone']] == null) {
        data[results[i]['user']['time_zone']] = 1;
      } else {
        data[results[i]['user']['time_zone']] += 1;
      }
    }

    var datae = new google.visualization.DataTable();
    datae.addColumn('string', 'TimeZone');
    datae.addColumn('number', 'Persons');
    var finalData = [];
    $.each(data, function(i, k) { finalData.push([i, k]); });
    datae.addRows(finalData);
    datae.sort(1);
    
    var options = {'title':'現在TwitterでSoundcloudについて言及している人のタイムゾーン',
                   'width':700,
                   'height':400,
                  };
    
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(datae, options);

  });
}