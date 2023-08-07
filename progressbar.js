var values = document.querySelectorAll(".value");


values.forEach(value => {
    var valueNumber = Number(value.innerText);
var unitsMeasur = value.getAttribute("data-unit");

//getparent
var parent = value.parentElement;

var circleLength = parent.querySelector(".osnova").getTotalLength();
var indicatorLength = (circleLength * valueNumber) / 100;
parent.querySelector(".indicator").setAttribute("stroke-dasharray", indicatorLength + " " + circleLength);


//counting animation
var animDuration = 650;
var countSpeed = animDuration / valueNumber;
var step = 0;

var runningСounter = setInterval(function() {
	value.innerHTML = step + "<small>" + unitsMeasur + "</small>";
	step++;
  if (step > valueNumber) {
    clearInterval(runningСounter);
  }
}, countSpeed);

});

    




