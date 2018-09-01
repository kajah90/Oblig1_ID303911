/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var screen;

function postMessage(message) {
    
    //TODO later, send message to server
    var post = document.createElement("p");
    post.style.wordWrap = "break-word";
    post.innerHTML = "You: " + message;
    console.log(post);
    screen = document.getElementById("chat");
    screen.appendChild(post);

    
}