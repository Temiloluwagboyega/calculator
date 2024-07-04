function pickcomputer(){
    const random = Math.random()
    if(random >= 0 && random < 1/3){
         computerMove = 'rock';
    }
    else if (random >= 1/3 && random < 2/3){
         computerMove = 'paper';
    }
    else if (random >= 2/3 && random < 1){
         computerMove = 'scissors';
    }
}
let computerMove = ''
function rockFunction(){
    pickcomputer();
    let result = '';
    if (computerMove === 'rock'){
        result = 'Tie.';
    }
    else if (computerMove === 'paper'){
        result = 'You lose';
    }
    else if (computerMove === 'scissors'){
        result = 'You win';
    }

    alert(`You picked rock computer picked ${computerMove}.${result}`);


}

function paperFunction(){
    pickcomputer();
    let result = ''
    if (computerMove === 'rock'){
        result = 'You win';
    }
    else if (computerMove === 'paper'){
        result = 'Tie';
    }
    else if (computerMove === 'scissors'){
        result = 'You lose';
    }

    alert(`You picked paper computer picked ${computerMove}. ${result}`)

}

function scissorsFunction(){
    pickcomputer();
    let result = ''
    if (computerMove === 'rock'){
        result = 'You win';
    }
    else if (computerMove === 'paper'){
        result = 'Tie';
    }
    else if (computerMove === 'scissors'){
        result = 'You lose';
    }

    alert(`You picked paper computer picked ${computerMove}. ${result}`)
}






// CALCULATOR 

let result = ''

function calc1(){
    result += '1'
    document.getElementById('result').innerHTML = `${result}`
}
function calc2(){
    result += '2'
        document.getElementById('result').innerHTML = `${result}`
}
function calc3(){
    result += '3'
        document.getElementById('result').innerHTML = `${result}`
}
function calc4(){
    result += '4'
        document.getElementById('result').innerHTML = `${result}`
}
function calc5(){
    result += '5'
        document.getElementById('result').innerHTML = `${result}`
}
function calc6(){
    result += '6'
        document.getElementById('result').innerHTML = `${result}`
}
function calc7(){
    result += '7'
        document.getElementById('result').innerHTML = `${result}`
}
function calc8(){
    result += '8'
        document.getElementById('result').innerHTML = `${result}`
}
function calc8(){
    result += '8'
        document.getElementById('result').innerHTML = `${result}`
}
function calc9(){
    result += '9'
        document.getElementById('result').innerHTML = `${result}`
}
function calc0(){
    result += '0'
        document.getElementById('result').innerHTML = `${result}`
}
function add(){
    result += '+'
    document.getElementById('result').innerHTML = `${result}`
}
function minus(){
    result += '-'
        document.getElementById('result').innerHTML = `${result}`
}
function multiply(){
    result += '*'
        document.getElementById('result').innerHTML = `${result}`
}
function divide(){
    result += '/'
    if (result === `${result}`){
        document.getElementById('result').innerHTML = `${result}`
    }
    else{
    document.getElementById('result').innerHTML = ``}
}
function equal(){
    result = eval(result)
        document.getElementById('result').innerHTML = `${result}`
}
function clearAll(){
    result = ''
        document.getElementById('result').innerHTML = `0`
}
function delete1(){
    result
    document.getElementById('result').innerText.slice(0, -1)
}