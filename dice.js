
function rollDice(){
  const noOFDice = document.getElementById("myInput").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  for(let i = 1;i<=noOFDice;i++){
    let random = Math.floor(Math.random()*6)+1;
    values.push(random);
    images.push(`<img src="Images/${random}.jpg">`);
  }
  
  diceResult.textContent = `dice: ${values.join(", ")}`;
 
  diceImages.innerHTML = images.join("");
  console.log(images.join(""));

}



