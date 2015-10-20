// var redButton = document.querySelector("#redButton");
// var whiteButton = document.querySelector("#whiteButton");
// var blueButton = document.querySelector("#blueButton");
// var yellowButton = document.querySelector("#yellowButton");
//
// redButton.addEventListener('click', redBackgroundChange);
// whiteButton.addEventListener('click', whiteBackgroundChange);
// blueButton.addEventListener('click', blueBackgroundChange);
// yellowButton.addEventListener('click', yellowBackgroundChange);
//
// // Red Button
// function redBackgroundChange() {
//   document.body.className = "one"
// };
//
// //  White Button
// function whiteBackgroundChange() {
//   document.body.className = "two"
// };
//
// //  Blue Button
// function blueBackgroundChange() {
//   document.body.className = "three"
// };
//
// //  Yellow Button
// function yellowBackgroundChange() {
//   document.body.className = "four"
// };
//
// //


document.querySelector("#switcher").addEventListener("click", function(evt){
  document.body.className = evt.target.className
})
