let boxs = document.querySelectorAll('.parent .row .all .box')
let colmuns = document.querySelectorAll('.parent .row .all')
let carts = document.querySelectorAll('.parent .row .cart p')


colmuns.forEach((element)=>{

    element.addEventListener('click' , (el)=>{
        colmuns.forEach((e) =>{
            e.className = 'all col-1'
        })
        el.target.className = 'all col-10'
    })
})
