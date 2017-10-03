var mess=0;
var commentArray=[];
var mfArray=[];
var madpArray=[];
var i,j,k;
function callingAPIfordaterange(fromDate,toDate)
{
  var ticketurl="http://10.21.12.69:8080/commentgetter/"+fromDate+"/"+toDate;

commentArray=[];
mfArray=[];
madpArray=[];
restResult(ticketurl,1);

}
function handleDatafromServerforTickets(thedata)
{

  console.log(thedata);
  commentArray=[];
  mfArray=[];
  madpArray=[];
  if(thedata.length!=0){
  for(i=0;i<thedata.length;i++)
  {
    if(thedata[i].CSE_Team_Assigned=='MF')
    mfArray.push(thedata[i]);
    else {
      madpArray.push(thedata[i]);
    }
    commentArray.push(thedata[i]);
    console.log(commentArray[i]);

   cleanJson={}

  }

cleanJsonbeforePotentailScoreCalculation(commentArray,0);
  }
  else {
  alert('Seems that there is no data regarding the query! :(');
  }
}

function cleanJsonbeforePotentailScoreCalculation(cA,indexer) {
  taggers=[{'id':'#Severity Justification#','value':0,'comments':[],'tickets':[],'tickets':[],'tickets':[]},{'id':'#Problem Statement#','value':0,'comments':[],'tickets':[],'tickets':[],'tickets':[]},{'id':'#Question#','value':0,'comments':[],'tickets':[],'tickets':[],'tickets':[]},{'id':'#Questions#','value':0,'comments':[],'tickets':[],'tickets':[],'tickets':[]},{'id':'#Root Cause#','value':0,'comments':[],'tickets':[]},{'id':'#RCA Justification#','value':0,'comments':[],'tickets':[]},{'id':'#Data Collection#','value':0,'comments':[],'tickets':[]},{'id':'#Update#','value':0,'comments':[],'tickets':[]},{'id':'#Customer Discussion#','value':0,'comments':[],'tickets':[]},{'id':'#Action Plan#','value':0,'comments':[],'tickets':[]},{'id':'#Solutions#','value':0,'comments':[],'tickets':[]},{'id':'#Answer#','value':0,'comments':[],'tickets':[]},{'id':'#Solution#','value':0,'comments':[],'tickets':[]},{'id':'#Knowledge Content#','value':0,'comments':[],'tickets':[]}]
   cleanJson={};
   console.log(indexer);
if(indexer==0){}
  else if (indexer==1) {
    console.log(document.getElementById('madp').checked);
    document.getElementById('madp').checked=true;
    mess=1;
  }
  else if (indexer==2) {
    mess=1;
    document.getElementById('mf').checked=true;
  }
  else {
    mess=1;
    document.getElementById('both').checked=true;
  }
for (var i = 0; i < cA.length; i++) {
  for (var j = 0; j < cA[i].comments.length; j++) {
    for (var k = 0; k < taggers.length; k++) {
      if(cA[i].comments[j].plain_body.includes(taggers[k].id))
      {
        taggers[k].value++;
        taggers[k].comments.push(cA[i].comments[j].plain_body);
        taggers[k].tickets.push(cA[i].ctid);
        cleanJson[""+taggers[k].id]=taggers[k].value;
      }

    }
  }
}console.log(cleanJson);
potentialscorecaluclator(taggers,cleanJson,cA);

}
