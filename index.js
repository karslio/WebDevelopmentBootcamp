document.querySelector(".img1").src = 'images/dice1.png'
document.querySelector(".img2").src = 'images/dice2.png'

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


document.querySelector('.img1').setAttribute('src', `images/dice${randomNumber1}.png`)

document.querySelector('.img2').setAttribute('src', `images/dice${randomNumber2}.png`)


if (randomNumber1 > randomNumber2){
    document.querySelector('h1').textContent = 'Player 1 Win';
}
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').textContent = 'Player 2 Win';
}else{
     document.querySelector('h1').textContent = 'Draw';
}


