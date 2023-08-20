// import chatBotService from "./chatbotservice.js";
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");
const chatHeader = document.querySelector(".chat-header");
const container = document.querySelector(".chatBotContainer");

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) =>{ 
    if (event.keyCode === 13){
        renderUserMessage();    
    }
});

chatHeader.addEventListener("click", () =>{
    container.classList.toggle("collapse")
});
const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput, "user");
    txtInput.value ="";
    toggleLoading(false);
    setTimeout(()=>{
    renderChatbotResponse(userInput);
    setScrollPosition();
    toggleLoading(true);

    }, 1000);

};

const renderChatbotResponse = (userInput) =>{
    const res = getChatbotResponse(userInput);
    renderMessageEle(res);
}

const renderMessageEle=(txt, type) => {
    let className ="user-message";
    if(type !== 'user'){
        className ="chatbot-message"; 
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBody.append(messageEle);
};

const getChatbotResponse = (userInput) =>{
    // chatBotService.getBotResponse(userInput).then((response)=>{
    //     console.log(response);
    // })
    // .catch((error)=> {});

    // return chatBotService.getBotResponse(userInput) ==undefined
    // ? "please select valid option"
    // : chatBotService.getBotResponse(userInput);

    return responseObj[userInput] == undefined
    ? "Please choose the correct option"
    : responseObj[userInput];

};

const setScrollPosition = () =>{
    if(chatBody.scrollHeight >0 ){
        chatBody.scrollTop=chatBody.scrollHeight
    }
};

const toggleLoading=(show)=>loadingEle.classList.toggle("hide",show)