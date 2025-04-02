class studentHogwarts {
  privateScore = 0;
  name = null;

  /* Private Method - only called within the class */
  #changeScoreBy(points) {
    this.privateScore += points;
  }

  setName(newName) {
    this.name = newName; 
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return (`${this.name}: ${this.privateScore}`);
  }
}

/* Creating "harry", instance of studentHogwarts */
const harry = new studentHogwarts();
harry.setName("Harry");
/* Calling reward * 4 */
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
/* Use the getScore method */
console.log(harry.getScore());

/* Creating "draco", instance of studentHogwarts */
const draco = new studentHogwarts();
draco.setName("Draco");
/* Calling reward * 1 + penalize * 3 */
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
/* Use the getScore method */
console.log(draco.getScore());