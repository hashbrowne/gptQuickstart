function setInputValue(labelId) {
    var label = document.getElementById(labelId);
    var value = label.innerText;
    document.getElementById('textInput').value = value;
  }