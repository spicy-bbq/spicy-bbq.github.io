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

function Background() {
    const c = background.getContext('2d')
    const pixel_size = 5
    const resolution = [background.width / pixel_size, background.height / pixel_size]
    const W = resolution[0] / 2
    const H = resolution[1] / 2
    const height = Math.floor(Math.random() * (15 - 6)) + 6
    const blend = Math.floor(Math.random() * (30 - 0))

    const colors = {
        pink: '#f5c2e7',
        dark_pink: '#ea76cb',
        purple: '#cba6f7',
        dark_purple: '#8839ef',
        red: '#f38ba8',
        dark_red: '#d20f39',
        orange: '#fab387',
        dark_orange: '#fe640b',
        yellow: '#f9e2af',
        dark_yellow: '#df8e1d',
        blue: '#89b4fa',
        dark_blue: '#1e66f5',
        lavender: '#b4befe',
        dark_lavender: '#7287fd',
        green: '#a6e3a1',
        dark_green: '#40a02b',
        white: '#cdd6f4',
        gray: '#6c7086',
        black: '#11111b',
    }

    function P(x, y, color) {
        c.fillStyle = color
        c.fillRect((x + W) * pixel_size, (y + H) * pixel_size, pixel_size, pixel_size)
    }
    
    for(let y = -H; y < H; y++) {
        for(let x = -W; x < W; x++) {
            
            if(y > 0) {
                //bg hill
                if(-x < -H / y * height + blend + y / 2) {
                    P(x, y, colors.dark_green)
                }

                //fg hill
                if(x < -H / y * height + blend + y / 2) {
                    P(x, y, colors.green)    
                }
            }

            //sun
            //if(y < -19 && y > -33) {
            //    P(x, y, colors.yellow)
            //}
        }
    }

}

Background()
ToggleStartMenu()
//OpenApp('Test')
CloseWindow()
setInterval(SetTime(), 5000)
