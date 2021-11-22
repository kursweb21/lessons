// объявление переменных
const btnCart = document.getElementById('cart')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn-close')
const inputAdress = document.querySelector('.adress-input')

// объявление функций
const modalOpen = () => {
    modal.classList.toggle('modal--close')   
}

// вызов функций
btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen);

modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modalOpen()
    }
})

// логеры
console.log();