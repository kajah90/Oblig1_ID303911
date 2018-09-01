/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var screen;
var allChats = new Array();
var aChat;


createChat("Per, Kurt");
function createChat(chatMembers) {
    var names = document.createElement("p");
    names.style.wordWrap = "break-word";
    names.innerHTML = "Chatting with: " + chatMembers;
    screen = document.getElementById("chat");
    console.log(names);
    screen.insertBefore(names, screen.firstChild);
}
function postMessage(messageValue) {
    
    //TODO later, send message to server
    var message = document.getElementById(messageValue).value;
    var post = document.createElement("p");
    post.id = 'chatMessage';
    post.style.wordWrap = "break-word";
    post.innerHTML = "You: " + message;
    console.log(post);
    screen = document.getElementById("chat");
    //to make the window stay at the bottom with new messages, i had to reverse the scroll in css, 
    //but then the elements were added at the top of the screen, 
    //due to reversal, so i had to fix that here, with insertBefore instead of appendChild
    screen.insertBefore(post, screen.firstChild);
    //clear text area after submit
    document.getElementById(messageValue).value = "";
    //screen.appendChild(post); 
  
}
