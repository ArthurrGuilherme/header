var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

//Exnpandir menu

var btnexp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnexp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})