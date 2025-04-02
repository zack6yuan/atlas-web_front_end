function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  /* Arguments accepted for spooky, dark, and scream mode */
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  /* Paragraph */
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Atlas!';

  /* Spooky Mode Button */
  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';

  /* Dark Mode Button */
  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = 'Dark mode';

  /* Scream Mode Button */
  const screamModeButton = document.createElement('button');
  screamModeButton.textContent = 'Scream mode';

  /* Add elements to body of the page */
  /* Listen for click events change modes */

  document.body.appendChild(paragraph);

  document.body.appendChild(spookyButton);
  spookyButton.addEventListener('click', spooky);

  document.body.appendChild(darkModeButton);
  darkModeButton.addEventListener('click', darkMode);

  document.body.appendChild(screamModeButton);
  screamModeButton.addEventListener('click', screamMode);
}
main()