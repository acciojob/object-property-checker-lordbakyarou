const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

let arr = Object.keys(sampleObject);
function hasKey(key) {
  //   write your code here
  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i]) {
      return true;
    }
  }
  return false;
}

// Do not change the code belo
const key = prompt("Enter Key.");
alert(hasKey(key));
