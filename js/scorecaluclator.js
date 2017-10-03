function potentialscorecaluclator(taggys,cleanjason,cA)
{
  taggers=[{'id':'#Severity Justification#','value':0,'comments':[]},{'id':'#Problem Statement#','value':0,'comments':[]},{'id':'#Question#','value':0,'comments':[]},{'id':'#Questions#','value':0,'comments':[]},{'id':'#Root Cause#','value':0,'comments':[]},{'id':'#RCA Justification#','value':0,'comments':[]},{'id':'#Data Collection#','value':0,'comments':[]},{'id':'#Update#','value':0,'comments':[]},{'id':'#Customer Discussion#','value':0,'comments':[]},{'id':'#Action Plan#','value':0,'comments':[]},{'id':'#Solutions#','value':0,'comments':[]},{'id':'#Answer#','value':0,'comments':[]},{'id':'#Solution#','value':0,'comments':[]},{'id':'#Knowledge Content#','value':0,'comments':[]}]
   cleanJson={};
  var ticketQualityScore=0;
  var missingTags=[];
  //console.log("taggys in fun2");
  //console.log(cleanjason);
  for (var i = 0; i < taggys.length; i++) {
    if(taggys[i].value>0)
    ticketQualityScore++;
    else {
      missingTags.push(taggys[i].id);
    }
  }
  ticketQualityScore=(ticketQualityScore/taggys.length)*100;
  //console.log(ticketQualityScore);

  var scaleforTheValues=Math.max(parseInt(Object.values(cleanjason)))-Math.min(parseInt(Object.values(cleanjason)));
  console.log(scaleforTheValues);
//  $('.pageloader').remove();
    clearSecondPageBeforeDisplay();
    drawTQIScore(ticketQualityScore,cA);
    drawMissingTags(missingTags);
    drawingChartforTags(cleanjason,scaleforTheValues,taggys,cA);

    drawOthers(commentArray.length);
}
