const clock = () => {
  var minutes = 5;
  var seconds = 0;
  var a;
  var b;
  const timer = () => {
    if (seconds < 10) {
      a = "0" + seconds;
    } else {
      a = seconds;
    }
    if (minutes < 10) {
      b = "0" + minutes;
    } else {
      b = minutes;
    }

    document.getElementById("czas").innerHTML = "Czas: " + b + ":" + a;

    if (seconds == 0 && minutes == 0) {
      document.getElementById("czas").innerHTML = "KONIEC";
      wynik();
      return 0;
    }

    if (seconds == 0 && minutes > 0) {
      minutes--;
      seconds = 60;
    }
    if (seconds >= 0 && minutes >= 0) {
      seconds--;
    }


  }
  return timer
}

const start = clock();

setInterval(start, 1000);
