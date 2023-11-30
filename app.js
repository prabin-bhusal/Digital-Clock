const myClock = function () {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  document.querySelector("#hour").innerHTML = hour;
  document.querySelector("#minute").innerHTML = minute;
  document.querySelector("#second").innerHTML = second;
};

var time = setInterval(myClock, 1000);
