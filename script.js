const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    if (e.target.id === 'orange') {
      body.style.backgroundColor = '#F34F1C';
    }

    if (e.target.id === 'green') {
        body.style.backgroundColor = '#7FBC00';
      }

    if (e.target.id === 'yellow') {
        body.style.backgroundColor = '#FFBA01';
      }

    if (e.target.id === 'blue') {
            body.style.backgroundColor = '#01A6F0';
        }
  });
});