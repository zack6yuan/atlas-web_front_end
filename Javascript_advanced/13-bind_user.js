const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Guillaume',
  lastName: 'Johns',
  location: 'Netherlands',
  occupation: 'Engineer'
};

function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

/* Binds logWelcomeUser to the user object */
const bindLogWelcomeUser = logWelcomeUser.bind(user);

/* Calling the function with the string "Hello" */
bindLogWelcomeUser('Hello');