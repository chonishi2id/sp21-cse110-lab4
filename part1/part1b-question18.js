
function tick() {
  let d = new Date();
  let curTime = d.toLocaleTimeString();
  console.log(curTime);
}

var ticker = setInterval(tick, 1000);

tick();