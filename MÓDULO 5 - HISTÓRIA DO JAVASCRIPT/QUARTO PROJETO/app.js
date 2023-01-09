const AddListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');


function printMessage() {
    const value = messageInput.value;
    console.log (value || 'Clicked me!');
}

function addListener() {
    clickableBtn.addEventListener('click', printMessage);
}

AddListenerBtn. addEventListener('click', addListener); //adicionamos um breakpoint aqui, por meio do dev tools do google chrome.









// 