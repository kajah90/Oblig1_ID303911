/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var gameScreen = document.createElement('div');
gameScreen.id = "gameScreen";
document.body.insertBefore(gameScreen, document.body.firstChild);


//function recieveMessage(message) {
    //TODO later, when working on server
    
//}



//fade in function for when we load in a new page
function fadeIn(element) {
    element.style.opacity = 0;
    var op = 0.2;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.03;
    }, 10);
}

//function we made in arlier project, for AJAX, loading just html into the <body> tag
function goToNewScreen(html, js) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            gameScreen.innerHTML = this.responseText;
            fadeIn(gameScreen);
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = js;
            gameScreen.append(script);

        }
    };
    xhttp.open("GET", html, true);
    xhttp.send();
}



