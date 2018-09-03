/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initiateChat(recipients) {
    var chatName  = document.getElementById(recipients).value;
    localStorage.setItem('chatName', chatName);
    goToNewScreen('chatWindow.html', 'chatWindowJS.js');
}