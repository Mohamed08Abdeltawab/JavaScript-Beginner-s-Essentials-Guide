//return promise resolve

//2
async function getScore() {
  return 42;
}

getScore().then((num) => {
  console.log(num);
});


//promise return rejected
//must be handeled by try catch or .catch()