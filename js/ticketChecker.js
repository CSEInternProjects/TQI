var taggers=[{'id':'#Severity Justification#','value':0,'comments':[]},{'id':'#Problem Statement#','value':0,'comments':[]},{'id':'#Question#','value':0,'comments':[]},{'id':'#Questions#','value':0,'comments':[]},{'id':'#Root Cause#','value':0,'comments':[]},{'id':'#RCA Justification#','value':0,'comments':[]},{'id':'#Data Collection#','value':0,'comments':[]},{'id':'#Update#','value':0,'comments':[]},{'id':'#Customer Discussion#','value':0,'comments':[]},{'id':'#Action Plan#','value':0,'comments':[]},{'id':'#Solutions#','value':0,'comments':[]},{'id':'#Answer#','value':0,'comments':[]},{'id':'#Solution#','value':0,'comments':[]},{'id':'#Knowledge Content#','value':0,'comments':[]}]
var cleanJson={};
var compositeData=[];
function checkTicketBeforeCallingApi()
{
  var ticketNo=$('#ticketNo')[0].value;
  taggers=[{'id':'#Severity Justification#','value':0,'comments':[]},{'id':'#Problem Statement#','value':0,'comments':[]},{'id':'#Question#','value':0,'comments':[]},{'id':'#Questions#','value':0,'comments':[]},{'id':'#Root Cause#','value':0,'comments':[]},{'id':'#RCA Justification#','value':0,'comments':[]},{'id':'#Data Collection#','value':0,'comments':[]},{'id':'#Update#','value':0,'comments':[]},{'id':'#Customer Discussion#','value':0,'comments':[]},{'id':'#Action Plan#','value':0,'comments':[]},{'id':'#Solutions#','value':0,'comments':[]},{'id':'#Answer#','value':0,'comments':[]},{'id':'#Solution#','value':0,'comments':[]},{'id':'#Knowledge Content#','value':0,'comments':[]}]
   cleanJson={};
if(ticketNo=="")
  {
    alert('Please enter the ticket number');
  }
  if(ticketNo>0) {
    // IDEA: call the rest API
    var ticketurl="http://10.21.12.69:8080/comment/"+ticketNo;
    var tqibody=document.getElementById('pageloader');
    //$('#home').addClass("pageloader");
//tqibody.innerHTML=document.getElementById('home').innerHTML;
restResult(ticketurl,1);
var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);
//console.log($pageloader);

 $pageloader[0].classList.toggle('is-active');
 var pageloaderTimeout = setTimeout( function() {
          $pageloader[0].classList.toggle('is-active');
          clearTimeout( pageloaderTimeout );
        }, 1000 );




  }
  //if (ticketNo<0)
  //alert('You must be kidding! No negative numbers');


}
