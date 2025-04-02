function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function getSeatNumber() {
      return seat;
    }
  }
  const students = [];
  for (let x = 0; x < numbersOfStudents; x++) {
    /* Iterations + 1 */
    let newTotal = x + 1;
    /* Add to students array */
    students.push(studentSeat(newTotal));
  }
  return students;
}

/* Closure */
const classRoom = createClassRoom(10);