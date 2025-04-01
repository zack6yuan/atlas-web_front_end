function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function getSeatNumber() {
      return (seat);
    }
  }
  const students = [];
  for (let x = 0; x < numbersOfStudents; x++) {
    studentSeat = x + 1;
    students.push(studentSeat);
  }
  return students;
}
const classRoom = createClassRoom(10);