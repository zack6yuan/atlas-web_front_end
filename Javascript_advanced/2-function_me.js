function welcomeMessage(fullName) {
  return function setUp() {
    alert(`Welcome ${fullName}`);
  }
}

function guillaume() {
  alert(setUp("Guillaume"));
};