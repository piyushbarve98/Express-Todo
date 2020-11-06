console.log("hello");

let myDiv = document.querySelector(".myDiv");
let inputDiv = document.querySelector(".inputDiv");
let input= document.querySelector(".input");



function dreamFunc(dream){
      let li = document.createElement("li");
      li.textContent = dream;
      myDiv.appendChild(li);
      
}

function removeDream(){
  
}
fetch("/dreams")
  .then(res => {
    return res.json();
  })
  .then(dreams => {
  dreams.forEach(dreamFunc);
  inputDiv.addEventListener('click',(e)=>{
    e.preventDefault();
        if(e.target.tagName=="BUTTON"){
          dreams.push(input.value);
          dreamFunc(input.value);
          input.value = '';
        }
      })
  myDiv.addEventListener('click',(e)=>{
    dreams = dreams.filter((dream)=>{
      return dream!==e.target.textContent;
    })
    myDiv.removeChild(e.target);
    
  })
  });



