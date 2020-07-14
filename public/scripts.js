const modalOverlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll(".card")

for (const card of cards) {
    card.addEventListener("click", function() {
        const imgId = card.getAttribute("id")
        const author = card.querySelector(".container__author p")
        const title = card.querySelector(".container__title p")
      
        modalOverlay.querySelector("iframe").src = `/${imgId}.png`
        modalOverlay.querySelector(".modal_author").appendChild(author)
        modalOverlay.querySelector(".modal_title").appendChild(title)

        modalOverlay.classList.add("active")
    })
}

document.querySelector(".close_modal", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})