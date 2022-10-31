let submit = document.querySelector('input#submit')
let tabelist = document.querySelector('select#tabe')
submit.addEventListener('click', clicar)
function clicar(){
    let tabenumber = 1
    let number = Number(document.querySelector('input#number').value)
    if(number == ''){
        tabelist.innerHTML = '<option>invalid value</option>'
    }else{
        tabelist.innerHTML = ''
        for(number*tabenumber; tabenumber <=10; tabenumber++){
            tabelist.innerHTML += `<option>${number} x ${tabenumber} = ${number*tabenumber} </option>`
        }
    }
}