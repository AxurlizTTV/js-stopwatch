window.onload = function () {

  let seconds       = 00;
  let milis         = 00;
  let appendMilis   = document.getElementById("milis");
  let appendSeconds = document.getElementById("seconds");
  let buttonStart   = document.getElementById("button-start");
  let buttonStop    = document.getElementById("button-stop");
  let buttonReset   = document.getElementById("button-reset");
  let Interval ;

  buttonStart.onclick = function() {
    clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function() {
    clearInterval(Interval);
  }

  buttonReset.onclick = function() {
    clearInterval(Interval);
      milis = "00";
      seconds = "00";
      appendMilis.innerHTML = milis;
      appendSeconds.innerHTML = seconds;
  }

  function startTimer() {
    milis++;

    if(milis <= 9) {
      appendMilis.innerHTML = "0" + milis;
    }

    if(milis >= 9) {
      appendMilis.innerHTML = milis;
    }

    if(milis > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milis = 0;
      appendMilis.innerHTML = "0" + 0;
    }

    if(seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}