

function generate(){
    var randomNum =  Math.floor(Math.random()*6)
    console.log(randomNum)
    return(randomNum)
}

function answer(){
    var anwsers=["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here."]
    var temp= generate()
  if(temp === 0){
    document.getElementById(1).innerHTML =anwsers[0]
  }else if(temp === 1){
    document.getElementById(1).innerHTML =anwsers[1]
  }else if(temp === 2){
    document.getElementById(1).innerHTML =anwsers[2]
  }else if(temp === 3){
    document.getElementById(1).innerHTML =anwsers[3]
  }else if(temp === 4){
    document.getElementById(1).innerHTML =anwsers[4]
  }else if(temp === 5){
    document.getElementById(1).innerHTML =anwsers[5]
  }else
  {console.log("error")}
}
