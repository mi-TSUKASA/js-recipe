const imageElement = document.getElementById("dog-image")

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

/*async function callApi() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random")
  const dogs = await res.json()
  imageElement.src = dogs.message
}*/
const aisatsu = ["こんにちは", "おはよう"]
const miyake = ["三宅", "司"]
aisatsu.push("こんばんは")
for (let i = 0; i < aisatsu.length; i++) {
  console.log(aisatsu[i])
}
aisatsu.pop()
console.log(aisatsu)
aisatsu.splice(0, 1, "あほ")
console.log(aisatsu)
aisatsu.splice(2, 0, "Hello")
console.log(aisatsu)
const miyakeAisatsu = [...aisatsu, ...miyake]
console.log(miyakeAisatsu)
