




// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i =  0; i< coll.length; i++) {
    coll[i].addEventListener("click",function(){
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else{
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage(){
    let firstMessage = "how it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    
    let time = getTime();

    $("#chat-timestamp").append(time); // jquary.look into
    document.getElementById("userInput").scrollIntoView(false);
    
}

function messageReact(){
    let emoji = 1;


}

firstBotMessage();

function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    
    let botHtml  = '<p class="botText"><span>' + botResponse + '</span></p>';
    
    let bubble = '<div class="plus" onclick="expand(this)">'+
     '<i id="bubble-icon" class="fa-solid fa-plus fa-1xl"></i> </div>';
   

    $(".chatbox").append(botHtml)
    $(".chatbox").append(bubble);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);

    
    scrollj();
}

function getResponse(){
    let userText = $("#textInput").val();

    if (userText == ""){
        userText = "you can think of something right";
    }

    let userHtml  = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $(".chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);

    setTimeout(()=> {
        getHardResponse(userText);
    },1000)
    
    scrollj(); 

}

function buttonSendText(sampleText){
    let userHtml  = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $(".chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);

}

function sendButton(){
    getResponse();
    scrollj(); 
}

function heartButton(){
buttonSendText("Heart clicked!")
}

//JQuary // will send message with enter
$("#textInput").keypress(function(e){
    if(e.which ==13){
        getResponse();
        scrollj();
    }
})

function scrollj(){ 
    var messageBody = document.querySelector('.full-chat-block');
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}

// Reaction Button scroll
function expand(dot){
    dot.classList.toggle('plus--expanded');

        if(!dot.classList.contains('plus--expanded'))
    dot.classList.toggle('plus--unexpanded');

        else if(dot.classList.contains('plus--expanded') &&
    dot.classList.contains('plus--unexpanded'))
    dot.classList.toggle('plus--unexpanded');
}

//calender project