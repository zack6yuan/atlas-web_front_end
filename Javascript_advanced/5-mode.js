function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.transform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Atlas!';

  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';

  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';

  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';
}
main()