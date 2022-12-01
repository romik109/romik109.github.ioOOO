const userTextField = document.querySelector('a');


userTextField.addEventListener('click', 
  (event) => {
    const userText = prompt('Введите текст');
    userTextField.textContent = userText;
    console.log('Text changed' , userText );
    event.preventDefault();
  })