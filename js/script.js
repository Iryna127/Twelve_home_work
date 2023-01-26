const lights = document.querySelectorAll('.light');
console.log(lights);
let activeLight = 0;

const btn = document.getElementById('counter');
let countValue = 10;
let pressed = false;

setInterval(() => {
  changeLight();
}, 2000);

function changeLight() {
  lights[activeLight].className = 'light';
  console.log(lights[activeLight]);
  activeLight++;
  if (activeLight > 2) {
    activeLight = 0;
  }
  if (pressed) {
    activeLight = 0;

    const point = setInterval(() => {
      countValue -= 1;
      btn.innerHTML = countValue;
      console.log(countValue);
      if (countValue < 0) {
        btn.innerHTML = '';
        pressed = false;
        clear();
      }
    }, 1000);
    function clear() {
      clearInterval(point);
    }
  }
  const currentLight = lights[activeLight];
  currentLight.classList.add(currentLight.getAttribute('color'));
}
function tickHendler() {
  if (pressed) {
    pressed = false;
  }
}
function setRed() {
  pressed = true;
}
setTimeout(tickHendler, 1000);
