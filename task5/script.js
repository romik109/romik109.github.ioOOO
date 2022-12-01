let buttonEvent = document.querySelector ('button');
let userText = document.querySelector('#textInput');

userText.oninput = function() {
    duplicateField.innerHTML = userText.value;
  };

buttonEvent.addEventListener('click', (event) => {

    console.log(  userText.value + '  - Введенный и подтвержденный нажатием текст ');
    event.preventDefault(userText.value=duplicateField.innerHTML='');
})

