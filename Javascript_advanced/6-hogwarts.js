class studentHogwarts {
  #privateScore = 0;
  name = null;

  #changeScoreBy(points) {
    this.#privateScore += points;
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
    return(`name: ${this.privateScore}`);
  }
}

const harry = new studentHogwarts('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(`${newName}: ${privateScore}`);

const draco = new studentHogwarts('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(`${newName}: ${privateScore}`);