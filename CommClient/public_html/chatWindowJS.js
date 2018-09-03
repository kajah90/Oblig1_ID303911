/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var screen;
var thisChatName = localStorage.getItem('chatName');
localStorage.removeItem('chatName');

loadChat();
function postMessage(messageValue) {
    
    //TODO later, send message to server
    var message = document.getElementById(messageValue).value;
    var post = document.createElement("p");
    var tempString = "You: " + message;
    post.id = 'chatMessage';
    post.style.wordWrap = "break-word";
    post.innerHTML = tempString;
    console.log(tempString);
    addToLocalStorageArray(thisChatName, tempString);
    showMessage(post);
    //clear text area after submit
    document.getElementById(messageValue).value = "";
  
}
function showMessage(message) {
    screen = document.getElementById("chat");
    console.log(message);
    //to make the window stay at the bottom with new messages, i had to reverse the scroll in css, 
    //but then the elements were added at the top of the screen, 
    //due to reversal, so i had to fix that here, with insertBefore instead of appendChild
    screen.insertBefore(message, screen.firstChild);

    //screen.appendChild(post); 
}

//checks if the array already is storred, if not it creates one with "name" and adds the "value", if it is, it adds value to the array.

function addToLocalStorageArray(name, value) {

	// Get the existing data
	var existing = localStorage.getItem(name);
        var tempArray = new Array();
	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
        if(existing === null) {
            tempArray.push(value);
        }
        else {
            tempArray = JSON.parse(existing);
            tempArray.push(value);
        }

	// Save back to localStorage
	localStorage.setItem(name, JSON.stringify(tempArray));

}

function loadChat() {
    var chatLog;
    if(localStorage.getItem(thisChatName)=== null) {      
        var post = document.createElement("p");
        var tempString = "New chat with " + thisChatName;
        post.id = 'welcomeMessage';
        post.style.wordWrap = "break-word";
        post.innerHTML = tempString;
        showMessage(post); 
    } else {
        
        chatLog = JSON.parse(localStorage.getItem(thisChatName));
        
        for(i = 0; i < chatLog.length; i++) {
            
            var post = document.createElement("p");
            var tempString = chatLog[i];
            post.style.wordWrap = "break-word";
            post.innerHTML = tempString;
            showMessage(post); 
            
        }
        
    }
}