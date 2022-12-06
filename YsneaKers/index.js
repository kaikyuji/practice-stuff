// ISSO É A LISTA AO botar o mouse em cima dos menus
const sneakers = [document.querySelector('.run'), document.querySelector('.hype'), document.querySelector('.releases')]
const sneakers_list = [document.querySelector('.run-list'), document.querySelector('.hype-list'), document.querySelector('.releases-list')]

for(let snkrs = 0; snkrs <= 2; snkrs++){
    sneakers[snkrs].addEventListener('mouseover', function(){
        sneakers_list[snkrs].style.visibility = 'visible'
    })
    sneakers[snkrs].addEventListener('mouseout', function(){
        sneakers_list[snkrs].style.visibility = 'hidden'
    })
}


// ISSO É O REDIRECIONAMENTO PRA CADA TENIS

const threesnkrs = document.querySelectorAll('.sneakers')

for(i = 0; i < threesnkrs.length; i++){
    threesnkrs[i].addEventListener('click', function(){
        sessionStorage.setItem('item', `${this.id}`)
    })
}

