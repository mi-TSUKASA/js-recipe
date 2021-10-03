const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 1
  display.textContent = count / 100
}

button.onclick = function() {
  // 10ms ごとに countUp を実行するように登録する
  setInterval(countUp, 10)
  button.textContent = "stop"
}
