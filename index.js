
const res = document.getElementById("one");
const ele = document.getElementById("msg");
let a = 0;

function incr(){
   if(a<25){
      a++;
      res.textContent = a;
      if(a==25){
         ele.textContent = alert("Don't go to more than 25.");
      }
   }

}

function decr(){
   if(a>=1){
      a--;
      res.textContent = a;
      if(a==0){
         ele.textContent = alert("Don't go below 0!");
      }
   }
   
}

function reset(){
   a = 0;
   res.textContent = a;
}
