const labels = ['Alternative', 'Blues', 'Classical', 'Country', 'Electronic', 'Folk', 'Hip Hop', 'Indie', 'Jazz', 'Metal', 'Pop', 'R&B', 'Rap', 'Rock', 'Soul'];

function getRandomLabel() {
  const randomIndex = Math.floor(Math.random() * labels.length);
  return labels[randomIndex];
}

document.getElementById('indie-label').textContent = getRandomLabel();
document.getElementById('rap-label').textContent = getRandomLabel();
document.getElementById('house-label').textContent = getRandomLabel();

function setInputValue(value) {
  document.getElementById('textInput').value = value;
  document.getElementById('submit-button').click();
}
