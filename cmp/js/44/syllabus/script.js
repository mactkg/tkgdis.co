data={};
mySubjects=["コンピュータグラフィックス基礎", "論理とディジタル回路", "基本情報技術3", "コンテンツ・メディアプログラミング実習2", "English2B(D)", "技術・情報倫理"];

$(function(){
  $.getJSON('fms_syllabus.json', function(res) {
    data=res;
    
    myData = jQuery.grep(data['subject'], function(s, i) {
      for (var i=0; i < mySubjects.length; i++) {
        if(s['name'] == mySubjects[i]) {
          return true;
        }
      }
      return false;
    });
    
    console.log(myData);
    for (var i=0; i < myData.length; i++) {
      if(typeof myData[i]['text'] === "object") {
        myData[i]['text'] = null;
      }
      if(Object.keys(myData[i]['reference']).length < 1) {
        myData[i]['reference'] = null;
      }
      
      $("#subjects").append($("#theTmpl").render(myData[i]));
    }
  });
});
