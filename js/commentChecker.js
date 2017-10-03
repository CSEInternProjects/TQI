
function commentUrlCaller(ticketArray,index)
{

  var commenturl="http://localhost:3000/comment/"+ticketArray[index];

  restResult(commenturl,2);

}

function handleDatafromServerforComments(thydata,differentiator,index,ticketArray) {
  
}
