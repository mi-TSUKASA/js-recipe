const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const secondTimesButton = document.getElementById("2times-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function() {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function() {
  count -= 1
  display.textContent = count
}

secondTimesButton.onclick = function() {
  count *= 2
  display.textContent = count
}
