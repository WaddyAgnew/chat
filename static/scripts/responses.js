function getBotResponse(input) {

    const words = new Array("name","home","feeling","sup");
   // const keywords = words.values; 

    if (input == "rock"){
        return "paper";
    }else if(input == "paper") {
        return "scissors";
    }else if(input == "scissors") {
        return "rock";
    }



    if (words.includes(input)) {
        return "Whats ur name";
        console.log("Whats your name")
        //if (i){
           // return "hi"+ input;
        //}
    }
            // both way works but vv bottom need a real array setup
   // if (input == "home"){
       // return "hate";
   // }

    // other responses
    if (input == "hello") {
        return "hello there!";
    }else if(input == "goodbye"){
        return "Talk to you later";
    }else if(input == "hi"){
        return "Whats your name";
    }
    else {
        return "try something else..."
    }
    else {
        return 'Try'
    }

    if(true);
}
