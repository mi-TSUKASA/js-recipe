const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const container = document.getElementById("memo-container")

addButton.onclick = function() {
  const card = createCard(memoInput.value)
  container.append(card)
}

const createCard = function(text) {
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text
  memoInput.value = ""

  const deleteButton = document.createElement("button")
  deleteButton.className = "delete-button"
  deleteButton.textContent = "削除"
  card.append(deleteButton)
  deleteButton.onclick = function() {
    card.remove()
  }
  return card
}
