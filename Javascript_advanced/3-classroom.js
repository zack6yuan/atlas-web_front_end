function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    function returnSeats() {
      return(seat);
    }
    return returnSeats;
  }
  let students = [];
  for (let x = 0; x < numbersOfStudents; x++) {
    studentSeat = x.length + 1;
    students.push(studentSeat);
  }
  return students;
}
function classRoom() {
    createClassRoom(10);
}
classRoom()