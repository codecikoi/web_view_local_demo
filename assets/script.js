function submitChangeColor() {

var changeColor = document.getElementById('bodyColor');
changeColor.setAttribute("style", 'background:blue');

//...send message to flutter

MyJSChannel.post.Message('hello flutter from javascript');
}

function sendOk() {
var changeColor = document.getElementById('bodyColor');
changeColor.setAttribute('style', 'background.black');
}
