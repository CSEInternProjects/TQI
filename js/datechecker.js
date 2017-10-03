function checkingDatebeforeCallingAPI()
{
    fromDate=$('#fromDate')[0].value;
   toDate=$('#toDate')[0].value;
if(fromDate=="")
{
  alert('Please enter from date');
}
if(toDate=="") {
  alert('Please enter the to date')
}
if(fromDate!=""&& toDate!="")
{
  // IDEA: call the smmoth scroll also
   compareDate(fromDate,toDate);
}


}

function compareDate(fromDate,toDate)
{
  var convertFromDate=Date.parse(fromDate)/1000;
  var convertToDate=Date.parse(toDate)/1000;
  var todayDate=new Date();
  var converttodayDate=Date.parse(todayDate)/1000;
if(convertFromDate<=converttodayDate&&convertToDate<=converttodayDate)
{
  if(convertFromDate<=convertToDate)
  {
    // IDEA: call the rest api
    var $pageloader = Array.prototype.slice.call(document.querySelectorAll('.pageloader'), 0);
    console.log($pageloader);

     $pageloader[0].classList.toggle('is-active');
     var pageloaderTimeout = setTimeout( function() {
              $pageloader[0].classList.toggle('is-active');
              clearTimeout( pageloaderTimeout );
            }, 3000 );
            smoothscroll();
    callingAPIfordaterange(fromDate,toDate);
  }
  else {
    alert('oops! please check the dates');
  }
}
else {
  alert('Sorry! Time travel feature is not availablle');
}
}
