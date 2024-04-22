const catBtn = document.getElementById('listBtn')
const modal = document.querySelector('.backdrop')

function openModal () {
    modal.style.display = "block"
}
function closeModal () {
    modal.style.display = "none"
}

catBtn.addEventListener("click" , function(e) {
    e.preventDefault()
    console.log(catBtn)
    openModal();
})

window.addEventListener("click", function(e) {
    e.preventDefault();
    if(e.target == modal){
        closeModal()
    }
})
window.addEventListener("keydown", function(e) {
    e.preventDefault();
    if(e.key === "Escape"){
        closeModal()
    }
})