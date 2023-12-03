


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

   // const bubble = document.createElement("div")// "+"
   // bubble.classList.add("btnRec")
    //bubble.textContent = emoji
    // document.querySelector(".btnRec").innerHTML = '<p class="btnRec"><span>' + bubble + '</span></p>';
}

firstBotMessage();

function getHardResponse(userText){
    let botResponse = getBotResponse(userText);
    
    let botHtml  = '<p class="botText"><span>' + botResponse + '</span></p>';

    let bubble = '<div class="plus"></div>';
    

    $(".chatbox").append(botHtml).addClass("plus");
    //$(".bottext").addClass(bubble);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);

    //scroller.insertBefore(botHtml, anchor); chat sroll to bottom
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

   // scrollj(); 
    
}

function buttonSendText(sampleText){
    let userHtml  = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $(".chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(false);

}

function sendButton(){
    getResponse();
   // scrollj(); 
}

function heartButton(){
buttonSendText("Heart clicked!")
}

//JQuary // will send message with enter
$("#textInput").keypress(function(e){
    if(e.which ==13){
        getResponse();
    }
})

/*

//function scrollj(){
//var messageBody = document.querySelector('.chatbox');
   //messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

let scroller = document.querySelector('#scroller');
let anchor = document.querySelector('#anchor');

const targetNode = document.getElementById("scroller");

const config = { childList: true };

const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
//}
//scrollj(); 
---- come back to understand to keep chat to bottom scroll
*/
//calender project