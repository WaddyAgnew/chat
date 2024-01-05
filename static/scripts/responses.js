function getBotResponse(input) {

    const words = ["name","home","feeling"];
    const keywords = words.values; 

    if (input == "rock"){
        return "paper";
    }else if(input == "paper") {
        return "scissors";
    }else if(input == "scissors") {
        return "rock";
    }

    if (input == "name"){
        return "love";
    }

    // other responses
    if (input == "hello") {
        return "hello there!";
    }else if(input == "goodbye"){
        return "Talk to you later";
    }else if(input == "hi"){
        return "Whats your name";
    }else {
        return "Try asking something else...";
    }

}
//scrollj();