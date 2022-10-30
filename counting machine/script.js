let submit = document.querySelector('input#submit')
submit.addEventListener('click', clicar)
let text = document.querySelector('p#text')
function clicar(){
    let start = Number(document.querySelector('input#start').value)
    let end = Number(document.querySelector('input#end').value)
    let skp = Number(document.querySelector('input#skp').value)
    if(start == '' || end == '' ||  skp == ''){
        text.innerHTML = 'INVALID VALUES'
    }else if(end < start){// CASO O END SEJA MENOR QUE O START, TEREMOS QUE SUBTRAIR O START COM SKIP PRA CHEGAR NO END
        text.innerHTML = '<p>Counting...</p>'
        for(start; start>=end; start-=skp){
            if(start == end || start - skp < end){
                text.innerHTML += `${start}`
            }else{
                text.innerHTML += `${start} > `
            }
        }
    }else if(end > start){ // CASO O END SEJA MAIOR QUE O START, TEREMOS QUE SOMAR O START COM SKP PRA CHEGAR NO END
        text.innerHTML = '<p>Counting...</p>'
        for(start; start <= end; start+=skp){
            if(start == end || start + skp > end){
                text.innerHTML += `${start}`
            }else{
                text.innerHTML += `${start} >`
            }
        }   
    }
}