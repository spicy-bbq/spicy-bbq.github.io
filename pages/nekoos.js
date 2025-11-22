const background = document.querySelector('#background')
const win = document.querySelector('#window')
const title = document.querySelector('#title')
const app = document.querySelector('#app')
const open_app = document.querySelector('#open_app')
const clock = document.querySelector('#clock')
const start_menu = document.querySelector('#start_menu')

let start_menu_visible = 1

function ToggleStartMenu() {
    start_menu_visible *= -1

    if(start_menu_visible == 1) {
        start_menu.style.visibility = 'visible'
    }

    else {
        start_menu.style.visibility = 'hidden'
    }
}

function CloseWindow() {
    app.src = 'about:blank'
    win.style.visibility = 'hidden'
    open_app.style.visibility = 'hidden'
    title.innerHTML = ''
    open_app.innerHTML = ''
}

function SetTime() {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    if(Math.floor(hours) < 10) {
        hours = '0' + hours
    }

    if(Math.floor(minutes) < 10) {
        minutes = '0' + minutes
    }

    clock.innerHTML = hours + ':' + minutes
}

function OpenApp(app_name) {
    title.innerHTML = app_name
    open_app.innerHTML = app_name
    app.src = '../apps/' + app_name + '.html'
    win.style.visibility = 'visible'
    open_app.style.visibility = 'visible'
    ToggleStartMenu()
}

ToggleStartMenu()
//OpenApp('Test')
CloseWindow()
setInterval(SetTime(), 5000)
