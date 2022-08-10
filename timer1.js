//remove the first 2 elements to keep the arguments only
const args = process.argv.splice(2);

//loop
for (const each of args) {
  const num = Number(each);
  //ensure argument is a number and not a negative number
  if (!isNaN(num) && num >= 0) {
    setTimeout(() => {
      //create a beep sound
      process.stdout.write('\x07');
    }, num * 1000);
  }
}