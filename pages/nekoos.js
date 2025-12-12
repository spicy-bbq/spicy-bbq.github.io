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
    const sun_x = -8
    const sun_y = -24
    const sun_size = 14
    const sun_thickness = 9
    const sun_inner_thickness = 1.5
    const sun_ray_size = 2
    const wave_length = Math.floor(Math.random() * (10 - 5)) + 5
    const cloud1_y = -(Math.floor(Math.random() * (25 - 10)) + 10)
    const cloud1_x = -(Math.floor(Math.random() * (15)))
    const cloud1_height = 10
    const cloud1_width = 14
    const cloud2_y = -(Math.floor(Math.random() * (25 - 10)) + 10)
    const cloud2_x = Math.floor(Math.random() * (15))
    const cloud2_height = 20
    const cloud2_width = 20

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
                //sea
                P(x, y, colors.dark_blue)
                if(Math.abs(x) < W / y * wave_length && y % 2 == 0) {
                    P(x, y, colors.white)
                }

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
            if(y < sun_y + sun_size / 2 && y > sun_y - sun_size / 2) {
                if(x > sun_x - sun_size / 2 && x < sun_x + sun_size / 2) {
                    if(Math.abs(sun_x - x) <= -Math.abs(sun_y - y) + sun_thickness) {
                        P(x, y, colors.yellow)
                    }
                }
            }

            if(y + sun_ray_size < sun_y + sun_size / 2 && y - sun_ray_size > sun_y - sun_size / 2) {
                if(x - sun_ray_size > sun_x - sun_size / 2 && x + sun_ray_size < sun_x + sun_size / 2) {
                    if(Math.abs(sun_x - x) <= 
                        -Math.abs(sun_y - y) + sun_thickness - sun_ray_size * sun_inner_thickness) {
                        P(x, y, colors.orange)
                    }
                }
            }

            //clouds
            if(Math.abs(cloud1_y - y) < cloud1_height && Math.abs(cloud1_x - x) < cloud1_width) {
                if(Math.abs(cloud1_x - x) <= -Math.abs(cloud1_y - y) * 3 + cloud1_width && cloud1_y - y > 0) {
                    P(x, y, colors.white)
                }
            }

            if(Math.abs(cloud2_y - y) < cloud2_height && Math.abs(cloud2_x - x) < cloud2_width) {
                if(Math.abs(cloud2_x - x) <= -Math.abs(cloud2_y - y) * 3 + cloud2_width && cloud2_y - y > 0) {
                    P(x, y, colors.white)
                }
            }
        }
    }

}

Background()
ToggleStartMenu()
//OpenApp('Test')
CloseWindow()
setInterval(SetTime(), 5000)
