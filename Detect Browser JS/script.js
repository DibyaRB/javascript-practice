let userAgent = navigator.userAgent;
let browser;
if(userAgent.match(/edge/i)){
    browser="edge";
}
else if(userAgent.match(/firefox|fxios/i)){
    browser="firefox"
}
else if(userAgent.match(/opr/i)){
    browser="opera"
}
else if(userAgent.match(/chrome|chromium|chrios/i)){
    browser="chrome"
}
else if(userAgent.match(/safari/i)){
    browser="safari"
}
else{
    alert("Other Browser");
}

console.log(browser);

const logo = document.querySelector(`.logos .${browser}`);

if(logo){
    logo.style.opacity="1";
}