function getBotResponse(input) {

    holder();

    const words = new Array("home","feeling","sup");
    //const keywords = words.values; 

    if (input == "rock"){
        return "paper";
    }else if(input == "paper") {
        return "scissors";
    }else if(input == "scissors") {
        return "rock";
    }


    const greet = `hey`;

    if(input == name){
       // return "sup" name;
       //return document.getElementsByClassName(".botText").textContent = "hehe";
    }

    //if (words.includes(input)) {
        
        //return "Whats ur name";
       // document.querySelector("botText").innerHTML= greet;
       
        //if (i){
           // return "hi"+ input;
        //}
  //  }
            // both way works but vv bottom need a real array setup
   // if (input == "home"){
    //    console.log("hate")
    //}

    // other responses
    if (input == "hello") {
        return "hello there!";
    }else if(input == "goodbye"){
        return "Talk to you later";
    }else if(input == "hi"){
        return "Whats your name";
    }
    else {
        return "try something else.."
    }
   

    
}

function holder(name){

}
