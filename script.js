function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    document.getElementsByClassName("image")[0].src = "images/hell_naw_dog.jpg";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent =
      "HELL NAW 🔥🔥🔥";
    document.getElementById("name").style.display = "none";

  }

  if (response === "Yes") { 
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    var audio = document.getElementById('yesSound');
    audio.play();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "YIPPY😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/cat-cat-jumping.gif";

    document.getElementById("yesButton").remove();
  }
}
document.getElementById('no-button').addEventListener('click', function() {
  var fullHearts = document.querySelectorAll('.heart.full');
  var flashOverlay = document.getElementById('flash-overlay');

  if (fullHearts.length > 0) {
    fullHearts[fullHearts.length - 1].classList.remove('full');
    fullHearts[fullHearts.length - 1].classList.add('empty');

    var audio = document.getElementById('noSound');
    audio.play();

    var minusOne = document.createElement('div');
    minusOne.textContent = '-1';
    minusOne.style.position = 'absolute';
    minusOne.style.color = 'red';
    minusOne.style.fontSize = '8rem';
    minusOne.style.zIndex = '9999';
    minusOne.style.top = '50%';
    minusOne.style.left = '50%';
    minusOne.style.transform = 'translate(-50%, -50%)';
    minusOne.style.transition = 'opacity 0.5s ease, top 0.5s ease';

    document.body.appendChild(minusOne);

    flashOverlay.style.display = 'block';
    document.body.classList.add('shake');
    
    setTimeout(function() {
      flashOverlay.style.display = 'none';
      document.body.classList.remove('shake');
      minusOne.style.top = '40%'; 
      minusOne.style.opacity = '0'; 
    }, 500); 

    setTimeout(function() {
      minusOne.remove();
    }, 1000); 
  }
  var currentScale = this.dataset.scale ? parseFloat(this.dataset.scale) : 1;
  var newScale = currentScale + 0.5; 
  this.style.transform = 'scale(' + newScale + ')';
  this.dataset.scale = newScale;

  if (document.querySelectorAll('.heart.full').length === 0) {
    document.getElementById('no-button').style.display = 'none';

    var yesButton = document.getElementById('yesButton');
    yesButton.style.transform = 'scale(5)'; 
    yesButton.style.transition = 'transform 0.3s ease'; 
    yesButton.classList.add('glowing'); 
  }

}

);

