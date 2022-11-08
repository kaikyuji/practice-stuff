// oq a gnt vai querer q aconteça?
// seleciona 1 das 3 opções
// os dados de cada lutador já são existentes,
// pikachu = hp: 100 // dmg = 80 // speed: 100 -- always wins in speed // always wins vs goku // always wins vs ryu
// goku = hp: 160 // dmg 60 // speed: 60 -- goku vs pikachu = pikachu // goku vs ryu = goku // always wins ryu // always loses to pikachu
// ryu = hp: 200 // dmg 50 // speed: 40 -- always lose in speed // always loses to goku // always wins vs pikachu 

let ryu = document.querySelector('input#ryu')
let goku = document.querySelector('input#goku')
let pikachu = document.querySelector('input#pikachu')
let hp_desc = document.querySelector('p#hp_desc')
let dmg_desc = document.querySelector('p#dmg_desc')
let spe_desc = document.querySelector('p#speed_desc')
let fighter_image = document.querySelector('img#fighter_image')
const go = document.querySelector('p#gobattle')
const secao = document.querySelector('section')

let pik_stats = {name:'Pikachu', hp:100, dmg:80, speed:100, img: 'images/pikachu.jpg'}
let gok_stats = {name:'Goku', hp:160, dmg:60, speed:60, img: 'images/goks.jpg'}
let ryu_stats = {name: 'Ryu', hp:200, dmg:50, speed:40, img: 'images/ryu.jpg'}
const start = document.createElement('img')
const anchor = document.createElement('a')

function clic(){
    if(ryu.checked){
        //Your fighter:
        sessionStorage.setItem('fighter', ryu_stats.name), sessionStorage.setItem('damage', ryu_stats.dmg)
        sessionStorage.setItem('hp', ryu_stats.hp), sessionStorage.setItem('speed', ryu_stats.speed)
        sessionStorage.setItem('img', ryu_stats.img)
        // Your opponent:
        sessionStorage.setItem('fighter2', pik_stats.name), sessionStorage.setItem('damage2', pik_stats.dmg)
        sessionStorage.setItem('hp2', pik_stats.hp), sessionStorage.setItem('speed2', pik_stats.speed)
        sessionStorage.setItem('img2', pik_stats.img)
        //Selection fighter images:
        fighter_image.src = "images/ryu.jpg"
        dmg_desc.innerHTML = `Damage per Attack: ${ryu_stats.dmg}`
        hp_desc.innerHTML = `Max Health: ${ryu_stats.hp}`
        spe_desc.innerHTML = `Speed: ${ryu_stats.speed}`
    }else if(goku.checked){
        // Your fighter:
        sessionStorage.setItem('fighter', gok_stats.name), sessionStorage.setItem('damage', gok_stats.dmg)
        sessionStorage.setItem('hp', gok_stats.hp), sessionStorage.setItem('speed', gok_stats.speed)
        sessionStorage.setItem('img', gok_stats.img)
        // Your opponent:
        sessionStorage.setItem('fighter2', ryu_stats.name), sessionStorage.setItem('damage2', ryu_stats.dmg)
        sessionStorage.setItem('hp2', ryu_stats.hp), sessionStorage.setItem('speed2', ryu_stats.speed)
        sessionStorage.setItem('img2', ryu_stats.img)
        //Selection fighter images:
        fighter_image.src = "images/goks.jpg"
        dmg_desc.innerHTML = `Damage per Attack: ${gok_stats.dmg}`
        hp_desc.innerHTML = `Max Health: ${gok_stats.hp}`
        spe_desc.innerHTML = `Speed: ${gok_stats.speed}`

    }else if(pikachu.checked){
        //Your fighter:
        sessionStorage.setItem('fighter', pik_stats.name),sessionStorage.setItem('damage', pik_stats.dmg)
        sessionStorage.setItem('hp', pik_stats.hp), sessionStorage.setItem('speed', pik_stats.speed)
        sessionStorage.setItem('img', pik_stats.img)
        // Your opponent:
        sessionStorage.setItem('fighter2', gok_stats.name), sessionStorage.setItem('damage2', gok_stats.dmg)
        sessionStorage.setItem('hp2', gok_stats.hp), sessionStorage.setItem('speed2', gok_stats.speed)
        sessionStorage.setItem('img2', gok_stats.img)
        //Selection fighter images:
        fighter_image.src = "images/pikachu.jpg"
        dmg_desc.innerHTML = `Damage per Attack: ${pik_stats.dmg}`
        hp_desc.innerHTML = `Max Health: ${pik_stats.hp}`
        spe_desc.innerHTML = `Speed: ${pik_stats.speed}`
    }else{
        dmg_desc.innerHTML = 'no fighter selected'
        hp_desc.innerHTML = ''
        spe_desc.innerHTML = ''
    }
    if(ryu.checked || pikachu.checked || goku.checked){
        start.width = 100
        start.src = 'images/startbutton.png'
        anchor.href = 'battle_page.html'
        secao.appendChild(anchor)
        anchor.appendChild(start)

    }
}