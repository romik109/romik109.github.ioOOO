

document.querySelector('#consoleLog').addEventListener('click', 
  (event) => {
    event.preventDefault();
    alert ('Метод для вывода сообщения в веб-консоль');
})


document.querySelector('#alert').addEventListener('click', 
  (event) => {
    event.preventDefault();
    alert ('Вывод сообщения и ожидание, пока пользователь нажмёт кнопку «ОК»');
})


document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    event.preventDefault();
    alert ('Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.');
})

