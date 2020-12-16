function nextpage(){


      document.getElementById("box1").style.display="none"; 
      document.getElementById("box2").style.display="block";  
      document.getElementById("box2").classList.add('displayed');
      document.getElementById("box1").classList.remove('displayed');
      var value = parseInt(document.getElementById('number').value, 1);
        value = isNaN(value) ? 1 : value;
         value++;
          document.getElementById('number').value = value;
       if(document.getElementById("box2").classList.contains('displayed')){
        document.getElementById("image6").style.opacity="1";
         document.getElementById("image7").style.opacity="0.6";
         if((document.getElementById("imgid5").style.display=="none") && (document.getElementById("imgid7").style.display=="none") ){
                   document.getElementById("image5").style.opacity="1";

         }
         else{
                     document.getElementById("image5").style.opacity="0.6";



         }

 }


      }
      function prevpage(){
      document.getElementById("box2").style.display="none"; 
      document.getElementById("box1").style.display="block";
        document.getElementById("box1").classList.add('displayed');
        document.getElementById("box2").classList.remove('displayed');
           if(document.getElementById("box1").classList.contains('displayed')){
        document.getElementById("image6").style.opacity="0.6";
                    //document.getElementById("image6").classList.add('unclickable');

      document.getElementById("image7").style.opacity="1";
      document.getElementById('number').value=1
     if((document.getElementById("imgid").style.display=="none") && (document.getElementById("imgid").style.display=="none") ){
                   document.getElementById("image5").style.opacity="1";
}
else{
                     document.getElementById("image5").style.opacity="0.6";



         }
         

 }



      }

function reloadAll(){ 
        document.getElementById("imgid").style.display="none";
        document.getElementById("buttonid").style.opacity="1";
        document.getElementById("imgid2").style.display="none";
        document.getElementById("buttonid2").style.opacity="1";
         document.getElementById("buttonid").classList.remove('unclickable');
          document.getElementById("buttonid2").classList.remove('unclickable');
           document.getElementById("image5").style.opacity="1";

       
        document.getElementById("imgid5").style.display="none";
        document.getElementById("buttonid3").style.opacity="1";
         document.getElementById("buttonid3").classList.remove('unclickable');
        document.getElementById("imgid7").style.display="none";
        document.getElementById("buttonid4").style.opacity="1";
         document.getElementById("buttonid4").classList.remove('unclickable');
        

        }
        function help(){
          document.getElementById("help").style.display="block";
          document.getElementById("body").style.display="none";

        }
        function dummy(){
          document.getElementById("dummy").style.display="block";
          document.getElementById("body").style.display="none";

        }

        function close(){

        document.getElementById("help").style.display="none";
        document.getElementById("dummy").style.display="none";
        document.getElementById("body").style.display="block";
        

        }

      function viewAnswer(){ 
 if(document.getElementById("box1").classList.contains('displayed')){
      document.getElementById("imgid").style.display="block";
        document.getElementById("buttonid").style.opacity="0.6";
        document.getElementById("buttonid").classList.add('unclickable');
        document.getElementById("imgid2").style.display="block";
        document.getElementById("buttonid2").style.opacity="0.6";
        document.getElementById("buttonid2").classList.add('unclickable');
        document.getElementById("image5").style.opacity="0.6";
 }

 else {
  document.getElementById("imgid5").style.display="block";
        document.getElementById("buttonid3").style.opacity="0.6";
        document.getElementById("buttonid3").classList.add('unclickable');
        document.getElementById("imgid7").style.display="block";
        document.getElementById("buttonid4").style.opacity="0.6";
        document.getElementById("buttonid4").classList.add('unclickable');
        document.getElementById("image5").style.opacity="0.6";

 }

        
        

        }

        function picture(){ 
           var pic = "http://educationalrc.org/tasks/2/assets/images/tikMark.png"
        document.getElementById("imgid").style.display="block";
        document.getElementById("buttonid").style.opacity="0.6";
        document.getElementById("buttonid").classList.add('unclickable');
        if ((document.getElementById("imgid").style.display=="block") && (document.getElementById("imgid2").style.display=="block") ){

document.getElementById("image5").style.opacity="0.6";
        }

        

        }
        function picture2(){ 
           var pic = "http://educationalrc.org/tasks/2/assets/images/tikMark.png"
        document.getElementById("imgid2").style.display="block";
        document.getElementById("buttonid2").style.opacity="0.6";
        document.getElementById("buttonid2").classList.add('unclickable');
        if ((document.getElementById("imgid").style.display=="block") && (document.getElementById("imgid2").style.display=="block") ){

document.getElementById("image5").style.opacity="0.6";
        }
     

        }
         function picture3(){ 
           document.getElementById("imgid3").style.display="block";
          window.setTimeout("document.getElementById('imgid3').style.display='none';", 500);  
     

        }
         function picture4(){ 
           document.getElementById("imgid4").style.display="block";
          window.setTimeout("document.getElementById('imgid4').style.display='none';", 500); 
        
        }
        function picturebox2(){ 
           var pic = "http://educationalrc.org/tasks/2/assets/images/tikMark.png"
        document.getElementById("imgid5").style.display="block";
        document.getElementById("buttonid3").style.opacity="0.6";
        document.getElementById("buttonid3").classList.add('unclickable');
         if ((document.getElementById("imgid5").style.display=="block") && (document.getElementById("imgid7").style.display=="block") ){

document.getElementById("image5").style.opacity="0.6";
        }

       
        

        }
        function picture2box2(){ 
           var pic = "http://educationalrc.org/tasks/2/assets/images/tikMark.png"
        document.getElementById("imgid7").style.display="block";
        document.getElementById("buttonid4").style.opacity="0.6";
        document.getElementById("buttonid4").classList.add('unclickable');
           if ((document.getElementById("imgid5").style.display=="block") && (document.getElementById("imgid7").style.display=="block") ){

document.getElementById("image5").style.opacity="0.6";
        }
     

        }
         function picture3box2(){ 
           document.getElementById("imgid6").style.display="block";
          window.setTimeout("document.getElementById('imgid6').style.display='none';", 500); 


        }
         function picture4box2(){ 
          document.getElementById("imgid8").style.display="block";
          window.setTimeout("document.getElementById('imgid8').style.display='none';", 500); 
        
        }


   function Reloadpage(){ 
 if(document.getElementById("box1").classList.contains('displayed')){
      document.getElementById("imgid").style.display="none";
        document.getElementById("buttonid").style.opacity="1";
         document.getElementById("buttonid").classList.remove('unclickable');
        document.getElementById("imgid2").style.display="none";
        document.getElementById("buttonid2").style.opacity="1";
         document.getElementById("buttonid2").classList.remove('unclickable');
          document.getElementById("image5").style.opacity="1";
       
 }
 else {
  document.getElementById("imgid5").style.display="none";
        document.getElementById("buttonid3").style.opacity="1";
         document.getElementById("buttonid3").classList.remove('unclickable');
        document.getElementById("imgid7").style.display="none";
        document.getElementById("buttonid4").style.opacity="1";
         document.getElementById("buttonid4").classList.remove('unclickable');
          document.getElementById("image5").style.opacity="1";
       
 }

}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
   
   document.getElementById("resize").style.width= w
      document.getElementById("resize").style.height= h


}

    
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();
