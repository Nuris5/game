const $start = document.querySelector('#start')
const $game = document.querySelector('#game')
const $result_header = document.querySelector('#result-header')
const $time_header = document.querySelector('#time-header')
const $result = document.querySelector('#result')
const $game_time = document.querySelector('#game-time')
const $time = document.querySelector('#time')


const $signUpBtn = document.querySelector('#signUpBtn')
const $signUp = document.querySelector('#signUp')
const $formGroup = document.querySelector('.formGroup')
const $bodyGame = document.querySelector('.bodyGame')
const $appResult = document.querySelector('#showuserList')
const $exit = document.querySelector('#exit')

let score = 0
let userName = ''
let userinfo = {}
let usersinfoList = []

$start.addEventListener('click', startGame)

function startGame() {
    $game_time.setAttribute('disabled', 'true')
    $time.textContent = $game_time.value
    score = 0
    $start.classList.add('hide')
    $game.style.backgroundColor = 'white'
    createBox()
    timer()
    $result_header.classList.add('hide')
    $time_header.classList.remove('hide')
    $exit.classList.add('hide')

}

$game_time.addEventListener('input', setTime)

function setTime() {
    $time.textContent = $game_time.value
    $result_header.classList.add('hide')
    $time_header.classList.remove('hide')
}

function endGame() {
    $game.innerHTML = ''
    $start.classList.remove('hide')
    $game.style.backgroundColor = '#ccc'
    $result_header.classList.remove('hide')
    $time_header.classList.add('hide')
    $result.textContent = score
    $game_time.removeAttribute('disabled')
    $exit.classList.remove('hide')
    $appResult.insertAdjacentHTML('beforeend', `<div class="user"><h2>${userName}</h2><h2>${score}</h2><h2>${new Date().toLocaleString()}</h2><h2>${$game_time.value}</h2></div>`)
    userListAct()

    let game_time = document.querySelector('#game-time')
    localStorage.setItem('list', JSON.stringify(usersinfoList))
    userinfo.game_time = game_time.value
    usersinfoList = JSON.parse(localStorage.getItem('list'))
    usersinfoList.push(userinfo)
    userinfo = {}
   
}

function userListAct() {
    usersinfoList.name = userName
    usersinfoList.score = score
    usersinfoList.Date = new Date().toLocaleString()
    usersinfoList.time = $game_time.value
    usersinfoList.push(userinfo)
    let listJSON = JSON.stringify(usersinfoList)
    localStorage.setItem('list', listJSON)
   
}

function showResAct() {
    $appResult.innerHTML = ''
    usersinfoList.forEach(function (item) {
        $appResult.insertAdjacentHTML('beforeend', `<div class="user"><h2>${item.name}}</h2><h2>${item.score}</h2><h2>${item.Date}</h2><h2>${item.time}</h2></div>`)
    })
}
usersinfoList.forEach(function (item) {
    $appResult.insertAdjacentHTML('beforeend', `<div class="user"><h2>${item.name}}</h2><h2>${item.score}</h2><h2>${item.Date}</h2><h2>${item.time}</h2></div>`)

})


function timer() {
    let $time = document.querySelector('#time')
    let interval = setInterval(function () {
        $time.textContent = (Number($time.textContent) - 0.1).toFixed(1)
        if ($time.textContent <= 0) {
            clearInterval(interval)
            endGame()
        }

    }, 100)
}

$game.addEventListener('click', clickBox)

function clickBox(event) {
    if (event.target.dataset.box) {
        createBox()
        score++

    }
}

function createBox() {
    $game.innerHTML = ''
    let box = document.createElement('div')
    let sizeBox = getRandom(40, 60)
    let left = getRandom(0, 300 - sizeBox)
    let top = getRandom(0, 300 - sizeBox)

    box.style.width = box.style.height = sizeBox + 'px'
    box.style.backgroundColor = `rgb(${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)})`
    box.style.position = 'absolute'
    box.style.left = left + 'px'
    box.style.top = top + 'px'
    box.style.cursor = 'pointer'

    box.setAttribute('data-box', true)

    $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


$signUpBtn.addEventListener('click', function () {
    usersinfoList = JSON.parse(localStorage.getItem('list'))
    if ($signUp.value) {
        console.log('yes');
        $formGroup.classList.add('hide')
        $bodyGame.classList.remove('hide')
        userName = $signUp.value
    } else {
        console.log('no')
        alert('enter your name')
    }

    let signUp = document.querySelector('#signUp')

    userinfo.signUp = signUp.value
})

$exit.addEventListener('click', function () {
    $formGroup.classList.remove('hide')
    $bodyGame.classList.add('hide')
    $exit.classList.add('hide')

})

// function sortUsers() {
//    for (let i = 0; i < sortUsers.length; i++) {
//     for (let j = 0; j < sortUsers.length; j++) {
//      if(sortUsers[j]>sortUsers[j+1]){
//         let swap = sortUsers[j]
//         sortUsers[j].score = sortUsers[j+1].score
//         sortUsers[j+1] = swap
//     }
//     }
//   }
// }  !!!! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

let n = Number(promt('rjk pflfx'))

for(let i = 0 ; i<n; i ++){
    let friend = prompt('friends').split(' ')
    friend.forEach(function(item){
        
    })
}