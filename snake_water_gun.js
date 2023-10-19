let computerChoice=document.getElementById("computerChoice")
let userChoice=document.getElementById("userChoice")
let finalResult=document.getElementById("finalResult")

let allButtons=document.querySelectorAll("button")

let userChoosing
let computerChoosing
let result


allButtons.forEach((bttn)=>{
  bttn.addEventListener("click",(element)=>{
    userChoosing= element.target.id
    userChoice.innerHTML=userChoosing
    
    computerChoiceFunc()
    finalResultFunc()
  })
})

function computerChoiceFunc(){
  let computerGenerating=Math.floor(Math.random()*3)
 
 if (computerGenerating===0) {
   computerChoosing="Rock"
 }
 else if (computerGenerating===1) {
   computerChoosing="Paper"
 }
 else if (computerGenerating===2) {
   computerChoosing="Scissors"
 }
 
 computerChoice.innerHTML=computerChoosing
}

function finalResultFunc(){
  if (computerChoosing=="Rock" && userChoosing=="Paper") {
    result= "You win"
  }
  else if (computerChoosing=="Rock" && userChoosing=="Scissors") {
    result="You lose"
  }
  else if (computerChoosing=="Paper" && userChoosing=="Scissors") {
    result="You win"
  }
  else if (computerChoosing=="Paper" && userChoosing=="Rock") {
    result="You lose"
  }
  else if (computerChoosing=="Scissors" && userChoosing=="Rock") {
    result="You win"
  }
  else if (computerChoosing=="Scissors" && userChoosing=="Paper") {
    result="You lose"
  }
  else{
    result= "It's a tie"
  }
  
  finalResult.innerHTML=result
}