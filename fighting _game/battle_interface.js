const your_fighter = document.querySelector('div#yourfighter')
const other_fighter = document.querySelector('div#otherfighter')
const of_img = document.createElement('img')
const yf_img = document.createElement('img')
yf_img.src = sessionStorage.getItem('img')
your_fighter.appendChild(yf_img)
of_img.src = sessionStorage.getItem('img2')
other_fighter.appendChild(of_img)
