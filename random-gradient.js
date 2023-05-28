document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const colors = [    ['#FFC0CB', '#800080'],
    ['#00CED1', '#9400D3'],
    ['#FFA07A', '#FA8072'],
    ['#32CD32', '#FFD700'],
    ['#6A5ACD', '#FF69B4'],
  ];
  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  body.style.setProperty('--color-1', randomColors[0]);
  body.style.setProperty('--color-2', randomColors[1]);
});