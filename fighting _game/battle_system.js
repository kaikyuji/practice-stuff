// Your stats:
const your_NAME = sessionStorage.getItem('fighter')
const your_HP  = Number(sessionStorage.getItem('hp'))
const your_DMG = Number(sessionStorage.getItem('damage'))
const your_SPE = Number(sessionStorage.getItem('speed'))

// Opponent stats:
const opp_NAME = sessionStorage.getItem('fighter2')
const opp_HP = Number(sessionStorage.getItem('hp2'))
const opp_DMG = Number(sessionStorage.getItem('damage2'))
const opp_SPE = Number(sessionStorage.getItem('speed2'))

// interface:

let your_max_HP  = Number(sessionStorage.getItem('hp'))
let opp_max_HP = Number(sessionStorage.getItem('hp2'))
let current_yourHP = your_max_HP
let current_oppHP = opp_max_HP

// battle log:
let yourhpbar = document.querySelector('div#yourhp')
let opphpbar = document.querySelector('div#opphp')
const battle_log = document.querySelector('select#battlelog')



// se o seu HP ou do inimigo nao for igual a zero:
// se voce tiver mais Speed, voce ataca
// se nao, voce é atacado
// se o seu HP ou do inimigo nao for igual a zero:
// voce é atacado
// voce ataca

const leavebutton = document.createElement('img')
const space = document.querySelector('p#leave')
const backfirst = document.createElement('a')
let turncount = 0

function attack(){
    if(your_SPE > opp_SPE && current_oppHP > 0 && current_yourHP > 0){
        current_oppHP -= your_DMG
        turncount += 1
        opphpbar.innerHTML = `HP: ${current_oppHP}/ ${opp_max_HP} `
        let turn = document.createElement('option')
        turn.textContent = `Turn ${turncount}: You(${your_NAME}) attacked opponent ${opp_NAME}, dealing ${your_DMG} damage points.`
        battle_log.appendChild(turn)
        if(current_oppHP > 0){
            current_yourHP -= opp_DMG
            turncount += 1
            yourhpbar.innerHTML = `HP: ${current_yourHP} / ${your_max_HP}`
            let turn2 = document.createElement('option')
            turn2.textContent = `Turn ${turncount}: ${opp_NAME} attacked you (${your_NAME}), dealing ${opp_DMG} damage points.`
            battle_log.appendChild(turn2)
        }
        if(current_oppHP <= 0){
            let endturn = document.createElement('option')
            endturn.textContent = `You've won, your opponent can't fight anymore`
            battle_log.appendChild(endturn)
        }

    }else if(opp_SPE > your_SPE && current_oppHP > 0 && current_yourHP > 0){
        current_yourHP -= opp_DMG
        turncount += 1
        yourhpbar.innerHTML = `HP: ${current_yourHP} / ${your_max_HP}`
        let turn = document.createElement('option')
        turn.textContent = `Turn ${turncount}: ${opp_NAME} attacked you(${your_NAME}), dealing ${opp_DMG} damage points`
        battle_log.appendChild(turn)
        if(current_yourHP > 0){
            current_oppHP -= your_DMG
            turncount += 1
            opphpbar.innerHTML = `HP: ${current_oppHP} / ${opp_max_HP}`
            let turn2 = document.createElement('option')
            turn2.textContent = `Turn ${turncount}: You (${your_NAME}) attacked opponent ${opp_NAME}, dealing ${your_DMG} damage points.`
            battle_log.appendChild(turn2)
        }

        if(current_oppHP <= 0){
            let endturn = document.createElement('option')
            endturn.textContent = `You've won, your opponent can't fight anymore`
            battle_log.appendChild(endturn)
        
        }
    }
    if(current_yourHP <= 0 || current_oppHP <= 0){
        space.appendChild(backfirst)
        backfirst.appendChild(leavebutton)
        backfirst.href = 'index.html'
        leavebutton.src = 'images/exit_game.png'
        leavebutton.width = 100
    }
}
