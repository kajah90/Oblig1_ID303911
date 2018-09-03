/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var screen;
loadEarlierChats();

function initiateChat(recipients) {
    var chatName  = document.getElementById(recipients).value;
    localStorage.setItem('chatName', chatName);
    goToNewScreen('chatWindow.html', 'chatWindowJS.js');
}

//clears the "earlier chats screen, then lists earlier chat name + last message,
// if no earlier chats, that gets shown
function loadEarlierChats() { 
    screen = document.getElementById("earlierChats");
    screen.innerHTML = "";
    
    if(localStorage.length === null) {
        var post = document.createElement("p");
        var tempString = "No Recent chats";
        post.id = 'earlierChat';
        post.style.wordWrap = "break-word";
        post.innerHTML = tempString;
        showMessage(post);
    } else {
        for ( var i = 0; i < localStorage.length; i++ ) {
            var chatName = localStorage.key(i);
            var wholeChat = new Array();
            wholeChat = JSON.parse(localStorage.getItem(chatName));
            console.log(wholeChat);
            var lastMessage = wholeChat[wholeChat.length - 1];
            var post = document.createElement("p");
            var tempString = "Chatted with: " + chatName + "<br>" + "Last Message: " + lastMessage;
            post.id = chatName;
            post.class = 'earlierChat';
            post.style.wordWrap = "break-word";
            post.innerHTML = tempString;
            showMessage(post);
            post.addEventListener('click', function (event) {
                localStorage.setItem('chatName', this.id);
                goToNewScreen('chatWindow.html', 'chatWindowJS.js');
            });
        }
    }
}

function showMessage(message) {
    screen = document.getElementById("earlierChats");
    console.log(message);
    //to make the window stay at the bottom with new messages, i had to reverse the scroll in css, 
    //but then the elements were added at the top of the screen, 
    //due to reversal, so i had to fix that here, with insertBefore instead of appendChild
    screen.insertBefore(message, screen.firstChild);

    //screen.appendChild(post); 
}

function clearDataAndReload() {
    
    localStorage.clear();
    goToNewScreen('startScreen.html', 'startScreenJS.js');
    
}
