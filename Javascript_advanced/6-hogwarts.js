class studentHogwarts {
  privateScore = 0;
  name = null;

  #changeScoreBy(points) {
    privateScore += points;
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
    return (`${this.name}: ${privateScore}`);
  }
}

const harry = new studentHogwarts("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(`${this.name}: ${privateScore}`);

const draco = new studentHogwarts("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(`${this.name}: ${privateScore}`);