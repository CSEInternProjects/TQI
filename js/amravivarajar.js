function clearSecondPageBeforeDisplay()
{
  // taggers=[{'id':'#Severity Justification#','value':0,'comments':[]},{'id':'#Problem Statement#','value':0,'comments':[]},{'id':'#Question#','value':0,'comments':[]},{'id':'#Questions#','value':0,'comments':[]},{'id':'#Root Cause#','value':0,'comments':[]},{'id':'#RCA Justification#','value':0,'comments':[]},{'id':'#Data Collection#','value':0,'comments':[]},{'id':'#Update#','value':0,'comments':[]},{'id':'#Customer Discussion#','value':0,'comments':[]},{'id':'#Action Plan#','value':0,'comments':[]},{'id':'#Solutions#','value':0,'comments':[]},{'id':'#Answer#','value':0,'comments':[]},{'id':'#Solution#','value':0,'comments':[]},{'id':'#Knowledge Content#','value':0,'comments':[]}]
  //  cleanJson={};
 var ele=document.getElementById('TQI').style.display;
 //var gapele=document.getElementById('gaps').style.dipslay;
 if(ele=='none'){
 document.getElementById('TQI').style.display='flex';
 //document.getElementById('gaps').style.dipslay='flex';
}
smoothscroll();
 var parent=document.getElementById("canvascontent");
 var child=document.getElementById('myChart');
 parent.removeChild(child);
 document.getElementById('canvascontent').innerHTML='<canvas id="myChart" width="400" height="400"></canvas>';

}

function drawTQIScore(tqiscore,cA)
{
  if(commentArray.length==1)
  {
    document.getElementById('Tid').innerHTML='of '+cA[0].Id;
    document.getElementById('basicInfo').innerHTML='Ticket type: '+cA[0].Ticket_type+' <br> Created at: '+cA[0].Created_at.substr(0,10)+' <br> Severity: '+cA[0].Severity+'</p>';
  }
  else {
    document.getElementById('Tid').innerHTML='';
    document.getElementById('basicInfo').innerHTML='FromDate: '+cA[0].Created_at.substr(0,10)+' <br> To date: '+cA[cA.length-1].Created_at.substr(0,10)+'<br> Total: '+cA.length;
  }
  document.getElementById('ptqi').innerText='0';
  var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
  $('#ptqi').animateNumber(
    {
      number: tqiscore,
      color: 'green',


      easing: 'easeInQuad',

      numberStep: percent_number_step
    },
    1000
  );

}

function drawMissingTags(missArray){
  document.getElementById('missingTags').innerHTML="";
for (var i = 0; i < missArray.length; i++) {
var clitches=$('<span class="tag is-rounded is-light">'+missArray[i]+'</span>')
clitches.appendTo('#missingTags');
}
}

function drawOthers(messageForRadiobuttons){
if(messageForRadiobuttons==1)
{
  mess=0;
  document.getElementById('radiobuttons').innerHTML='<p class="title">Platform</p><p class="subtitle">This ticket is assigned to <strong>'+commentArray[0].Product_Support_Assignee.split('.')[0]+'</strong> and belongs to <strong>'+commentArray[0].CSE_Team_Assigned+'</strong> team</p>'
}
else {
  if(mess==0){
  document.getElementById('radiobuttons').innerHTML='<p class="subtitle">Select your platform</p>  <div class="control">    <label class="radio">      <input type="radio" name="rsvp" id="madp" onclick="cleanJsonbeforePotentailScoreCalculation(madpArray,1)">      MADP    </label>    <label class="radio">      <input type="radio" name="rsvp" id="mf" onclick="cleanJsonbeforePotentailScoreCalculation(mfArray,2)">      MF    </label>    <label class="radio">      <input type="radio" name="rsvp" id="both" onclick="cleanJsonbeforePotentailScoreCalculation(commentArray,3)" checked>    Both    </label>  </div>';
}
else {

}
}
}
function drawModal(keyName,taggys,cA) {
  var chartcontent='';
  document.getElementById('modal-card-title').innerText='Tickets and comments with tag '+keyName;
  console.log(keyName);
  console.log(cA.length);
  if(cA.length==1)
  {
    for (var i = 0; i < taggys.length; i++) {
      if(keyName==taggys[i].id)
      {
        console.log(keyName);
        for(var j=0;j<taggys[i].comments.length;j++)
        {
          console.log(taggys);
          chartcontent=chartcontent+'<li><strong> Ticket Id: '+taggys[i].tickets[0]+'</strong><br><strong> Comment: </strong>'+taggys[i].comments[j]+'</li><hr>';
        }
      }
    }
    document.getElementById('chart-modal-info').innerHTML='';
    console.log(chartcontent);
    document.getElementById('chart-modal-info').innerHTML=''+chartcontent;
  }
  else {

    for (var i = 0; i < taggys.length; i++) {
      if(keyName==taggys[i].id)
      {
        console.log(taggys);

        for(var j=0;j<taggys[i].tickets.length;j++)
        {
          chartcontent=chartcontent+'<li>Ticket Id : <a href="https://konysolutions.zendesk.com/agent/tickets/'+taggys[i].tickets[j]+'" target="_blank" Comment:  >'+taggys[i].tickets[j]+'</a><br>'+taggys[i].comments[j]+'</li><hr>';
        }
      }
    }
    document.getElementById('chart-modal-info').innerHTML='';
    var appender=$(chartcontent);
    appender.appendTo('#chart-modal-info');
  }
  $("#modal2").addClass("is-active");
  $(".delete").click(function() {
     $("#modal2").removeClass("is-active");
  });
}
