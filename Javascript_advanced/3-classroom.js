function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function seatNumber(seat) {
      console.log(seat);
    }
  }
  const students = [];
  for (let x = 0; x < numbersOfStudents; x++) {
    studentSeat += x.length + 1;
    students.append(studentSeat);
  }
  studentSeat();

  return students;

  function classRoom() {
    createClassRoom(10);
  }
}