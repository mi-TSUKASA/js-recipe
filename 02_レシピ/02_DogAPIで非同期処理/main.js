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
