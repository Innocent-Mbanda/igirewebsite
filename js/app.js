

// ...........................function for read more button on programms..........
let i =0;
function myFunction(){
    if(!i){
      document.getElementById("more").style.display="inline"; 

      document.getElementById("dots").style.display="none"; 

      document.getElementById("read").innerHTML = "Read less";

      i=1;

    }
    else{
        document.getElementById("more").style.display="none"; 

        document.getElementById("dots").style.display="inline"; 
  
        document.getElementById("read").innerHTML = "Read more";
  
        i=0; 
    }
  
}

let s=0;
function myRead(){
    if(!s){
      document.getElementById("morete").style.display="inline"; 

      document.getElementById("dote").style.display="none"; 

      document.getElementById("reade").innerHTML = "Read less";

      s=1;

    }
    else{
        document.getElementById("morete").style.display="none"; 

        document.getElementById("dote").style.display="inline"; 
  
        document.getElementById("reade").innerHTML = "Read more";
  
      s=0; 
    }
  
}
let j=0;
function myReadu(){
    if(!j){
      document.getElementById("moru").style.display="inline"; 

      document.getElementById("dotu").style.display="none"; 

      document.getElementById("readu").innerHTML = "Read less";

      j=1;

    }
    else{
        document.getElementById("moru").style.display="none"; 

        document.getElementById("dotu").style.display="inline"; 
  
        document.getElementById("readu").innerHTML = "Read more";
  
      j=0; 
    }
  
}




