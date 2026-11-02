const previousValueElement = document.getElementById('previous-value');
const currentValueElement = document.getElementById('current-value');

let currentValue = '0';
let previousValue = '';
let operator = null;
let shouldResetDisplay = false;

function updateDisplay() {
  currentValueElement.textContent = currentValue;
  previousValueElement.textContent = previousValue
    ? `${previousValue} ${operator ?? ''}`
    : '';
}

function inputNumber(value) {
  if (shouldResetDisplay) {
    currentValue = value;
    shouldResetDisplay = false;
  } else {
    currentValue = currentValue === '0' ? value : currentValue + value;
  }

  updateDisplay();
}

function inputDecimal() {
  if (shouldResetDisplay) {
    currentValue = '0.';
    shouldResetDisplay = false;
    updateDisplay();
    return;
  }

  if (!currentValue.includes('.')) {
    currentValue += '.';
    updateDisplay();
  }
}

function deleteLastChar() {
  if (shouldResetDisplay) {
    currentValue = '0';
    shouldResetDisplay = false;
    updateDisplay();
    return;
  }

  currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : '0';
  updateDisplay();
}

function chooseOperator(nextOperator) {
  if (operator && !shouldResetDisplay) {
    calculate();
  }

  previousValue = currentValue;
  operator = nextOperator;
  shouldResetDisplay = true;
  updateDisplay();
}

function calculate() {
  if (!operator || !previousValue) return;

  const firstValue = Number(previousValue);
  const secondValue = Number(currentValue);
  let result = 0;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    case '/':
      result = secondValue === 0 ? 'Error' : firstValue / secondValue;
      break;
    default:
      return;
  }

  currentValue = String(result);
  previousValue = '';
  operator = null;
  shouldResetDisplay = true;
  updateDisplay();
}

function clearCalculator() {
  currentValue = '0';
  previousValue = '';
  operator = null;
  shouldResetDisplay = false;
  updateDisplay();
}

function handleButtonClick(event) {
  const button = event.target.closest('button');
  if (!button) return;

  const { action, value } = button.dataset;

  if (button.classList.contains('number')) {
    inputNumber(value);
    return;
  }

  switch (action) {
    case 'clear':
      clearCalculator();
      break;
    case 'delete':
      deleteLastChar();
      break;
    case 'operator':
      chooseOperator(value);
      break;
    case 'equals':
      calculate();
      break;
    default:
      break;
  }
}

function handleKeyboardInput(event) {
  const { key } = event;

  if (/\d/.test(key)) {
    inputNumber(key);
    return;
  }

  if (key === '.') {
    inputDecimal();
    return;
  }

  if (['+', '-', '*', '/'].includes(key)) {
    chooseOperator(key);
    return;
  }

  if (key === 'Enter' || key === '=') {
    calculate();
    return;
  }

  if (key === 'Backspace') {
    deleteLastChar();
    return;
  }

  if (key === 'Escape') {
    clearCalculator();
  }
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

document.addEventListener('keydown', handleKeyboardInput);

updateDisplay();
