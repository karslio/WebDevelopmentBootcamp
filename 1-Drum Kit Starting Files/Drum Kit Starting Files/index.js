var numberOfButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var audio = new Audio ("sounds/ton-1.mp3");
    audio.play();
  });
}
