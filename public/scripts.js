const modalOverlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll(".card")
const links = document.querySelectorAll(".link")
const url = window.location.href

for (const card of cards) {
    card.addEventListener("click", function() {
        const cardId = card.getAttribute("id")

        window.location.href = `/recipes/${cardId}`
        // const author = card.querySelector(".container__author p")
        // const title = card.querySelector(".container__title p")
      
        // modalOverlay.querySelector("iframe").src = `/${cardId}.png`
        // modalOverlay.querySelector(".modal_author").appendChild(author)
        // modalOverlay.querySelector(".modal_title").appendChild(title)

        // modalOverlay.classList.add("active")

        console.log(cardId)
    })
}


for (const link of links) {
    if (link.href == url) {
        link.classList.add("selected")
    }
}

// document.querySelector(".close_modal", function() {
//     modalOverlay.classList.remove("active")
//     modalOverlay.querySelector("iframe").src = ""
// })