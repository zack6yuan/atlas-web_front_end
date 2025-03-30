class studentHogwarts {
  let privateScore = 0;
  let name = null;

  #changeScoreBy(points) {
    console.log(privateScore + points);
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent(changeScoreBy) {
    changeScoreBy(1);
  }

  penalizeStudent(changeScoreBy) {
    changeScoreBy(-1);
  }

  getScore() {
    console.log(`${newName}: ${privateScore}`);
  }
  
  const harry = new studentHogwarts();
};