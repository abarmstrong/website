function showonlyone(thechosenone,flag) {
	//alert('inside');
	//alert(thechosenone);
	var newboxes = document.getElementsByTagName("div");
            for(var x=0; x<newboxes.length; x++) {
                  name = newboxes[x].getAttribute("class");
                  if (name == 'newboxes') {
                        if (newboxes[x].id == thechosenone) {
                        newboxes[x].style.display = 'block';
                  }
                  else {
                        newboxes[x].style.display = 'none';
                  }
            }
      }
	  toggleBg(flag);
}
<!--

//Disable right mouse click Script
//By Maximus (maximus@nsimail.com) w/ mods by DynamicDrive
//For full source code, visit http://www.dynamicdrive.com

var message="";

///////////////////////////////////
function clickIE4(){
if (event.button==2){
//alert(message);
return false;
}
}

function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){
//alert(message);
return false;
}
}
}

if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
document.onmousedown=clickIE4;
}

//document.oncontextmenu=new Function("alert(message);return false");
document.oncontextmenu=new Function("return false;")

// --> 

function toggleBg(flag)
{
var first=document.getElementById('first').style;
var second=document.getElementById('second').style;
if(flag==1)
{
first.background="url('../images/fn_prnt_active.jpg')";	
first.backgroundRepeat="no-repeat";	
second.background="url('../images/fn_tv_normal.jpg')";	
second.backgroundRepeat="no-repeat";	

}
if(flag==2)
{
first.background="url('../images/fn_prnt_normal.jpg')";	
first.backgroundRepeat="no-repeat";	
second.background="url('../images/fn_tv_active.jpg')";	
second.backgroundRepeat="no-repeat";	
}
}
function showTv(thechosenone, count, linktoactive) {
	document.getElementById('pageNum').innerHTML="Page 0" + count;
	activateLink(linktoactive);
	//alert('inside');
	//alert(thechosenone);
 	//var counter=1;
	var newboxes = document.getElementsByTagName("div");
	           for(var x=0; x<newboxes.length; x++) {
				
				
				name = newboxes[x].getAttribute("class");
 				 
                  if (name == 'tvboxes') {
					   if (newboxes[x].id == thechosenone) {
                       newboxes[x].style.display = 'block';
					   //pages[x].style.textDecoration="underline";
					   
					   
								
						
                  }
                  else {
                        newboxes[x].style.display = 'none';
						//pages[x].style.textDecoration="none";
															
                  }
            }
			
      }
	  
}
function showPrint(thechosenone, count, linktoactive) {
	document.getElementById('pageNumPrint').innerHTML="Page 0" + count;
	activateLink(linktoactive);
	//alert('inside');
	//alert(thechosenone);
 	//var counter=1;
	var newboxes = document.getElementsByTagName("div");
	           for(var x=0; x<newboxes.length; x++) {
				
				
				name = newboxes[x].getAttribute("class");
 				 
                  if (name == 'printboxes') {
					   if (newboxes[x].id == thechosenone) {
                       newboxes[x].style.display = 'block';
					   //pages[x].style.textDecoration="underline";
					   
					   
								
						
                  }
                  else {
                        newboxes[x].style.display = 'none';
						//pages[x].style.textDecoration="none";
															
                  }
            }
			
      }
	  
}
function activateLink(linktoactive)
{
var print2=document.getElementById("print2").style;	
var print1=document.getElementById("print1").style;
var tv2=document.getElementById("tv2").style;	
var tv1=document.getElementById("tv1").style;	
if(linktoactive=="tv2")
{
tv1.fontSize="12px";	
tv2.fontSize="18px";	
//tv3.fontSize="18px";	
}
if(linktoactive=="tv1")
{
tv1.fontSize="18px";	
tv2.fontSize="12px";	
//tv3.fontSize="12px";	
}
if(linktoactive=="print2")
{
print1.fontSize="12px";	
print2.fontSize="18px";	
//tv3.fontSize="18px";	
}
if(linktoactive=="print1")
{
print1.fontSize="18px";	
print2.fontSize="12px";	
//tv3.fontSize="12px";	
}

}


/* disable text selection 
window.onload = function(elem) {
  var element = document.getElementById('content');
  element.onselectstart = function () { return false; } // ie
  element.onmousedown = function () { return false; } // mozilla
}
/* disable text selection */
function disableBodyTextSelection()
{
window.onload = function() 
{
  var element = document.body;
  element.onselectstart = function () { return false; } // ie
  element.onmousedown = function () { return false; } // mozilla
}	
}

