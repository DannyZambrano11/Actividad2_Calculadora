let screen = document.getElementById('screen');

function clearScreen() {
  screen.value = '';
}

function appendValue(value) {
  screen.value += value;
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = 'Error';
  }
}

  
