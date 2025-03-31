console.log('Start of the execution queue');
// delay of 0
setTimeout(() => {
  console.log('Final code block to be executed');
}, 0);
// < 101 for 100
for (let i = 0; i < 101; i++) {
  console.log(i);
}
console.log('End of the loop printing');
