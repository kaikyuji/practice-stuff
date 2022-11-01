let divA = document.querySelector('div#a') // declaring div's variable
///////////////
let selectlist = document.querySelector('select#list') // declaring select list variable
let nlist = [] // declaring an array that's initially empty

//////////////

function submit(){
    let number = Number(document.querySelector('input#nb').value) // getting input number's value. REMINDER: you need to put this DURING the event
    if(number < 1 || number > 100){ // limits values
        alert('invalid values')
    }else if(nlist.indexOf(number) == -1){ // indexOf being equal to -1 means that the searched value isn't in the array, morelike, wasn't found
        nlist.push(number) // if the number isn't found, we can put it in the array, so .push method to insert it
        let opt = document.createElement('option') // creating <option> tag to insert in <select> element
        opt.textContent = `${number} was sucesfully saved` // setting up the element (that'll be turned on a select's attribute )
        selectlist.append(opt) // adding the option tag in select list
    }else{
        alert('this value is already on the list') // self explanatory
    }   
        
}

///////////

function compareNumbers(x, y) { //here we're making the function to sort the numbers, because just only the sort() won't sort for us the right way
    return x - y;
}
nlist.sort(compareNumbers);
//////////

function sum(x){
    let summ = 0 // summ is the variable that will get the final result of the sum
    // we want to sum every numbers from an array, so we need to know how much numbers are there, and the way we're using to get this info is using .length
    // which will always represent 1 number higher than the index, so we make a looping summing x[count] til the count gets next to the array(x) length's value
    //
    for(let count=0; count < x.length; count++){ 
        summ += x[count]
    }
    return summ
}

//////////////
let f_text = document.createElement('p') // i alrdy explained everything in finish function so whatever
let f_text2 = document.createElement('p') //
let f_text3 = document.createElement('p') //
let f_text4 = document.createElement('p') //

/////////////
function finish(){
    if(nlist.length == 0){
        alert('no saved values')
    }else{
        let total = sum(nlist)
        f_text.textContent = `${nlist.length} numbers were counted in total` // quantity of numbers
        f_text2.textContent = `the highest number was ${nlist[nlist.length - 1]}`
        //^ the highest number (after sorting array) is the last one, so variable length - 1 must be giving the respective last index
        f_text3.textContent = `the lowest number was ${nlist[0]}` // the lowest is the first, so you must use 0
        f_text4.textContent = `the sum of all numbers is ${total}` // total = result of sum function 
        divA.append(f_text), divA.append(f_text2), divA.append(f_text3), divA.append(f_text4) // appendingg all these to div
        selectlist.innerHTML = '' // clearing the select list because you want to make the site usable without reloading it
        nlist = [] // clearing the array cause for the same reason as selectlist, you wanna make clear everything when clicking 'FINISH'

    }
}



