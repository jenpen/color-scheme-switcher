var redButton = document.getElementById("redButton")
console.log(redButton)

//redButton.onclick = colorSwitch
redButton.addEventListener("click", colorSwitch)

function colorSwitch(){
  document.body.style.backgroundColor = "red"
  document.body.style.color = "#fff"
}
