var clickCount = 0;
function clickHandler(evt){
   clickCount++;
   console.log(evt);
   var str = "Thanks for clicking " + clickCount;
   this.innerText = str;

}
function setup(){

    }

    function keyPressed() {
        console.log(key);
     }
     
 
        
    


 


