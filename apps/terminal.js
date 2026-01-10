const content = document.querySelector('#content')
const form = document.querySelector('#form')
const input = document.querySelector('#input')

input.focus()
input.select()

form.addEventListener(
    'submit', function(e) {
        e.preventDefault()
        ProcessInput()
    }
)

function ProcessInput() {
    if(input.value.length == 0) return

    content.innerHTML += '<div class = "output">$ ' + input.value + '</div>'

    switch(input.value) {
        case 'help':
            Help()
            break
        case 'copypasta':
            Copypasta()
            break
        case 'nekofetch':
            Nekofetch()
            break
        default:
            let c = '<div class = "output">Command not found. '
            c += 'Type "help" to show available commands</div>'
            content.innerHTML += c
            break
    }

    form.reset()
    form.scrollIntoView({behavior: 'instant'})
}

function Copypasta() {
    let i = 0
    let c = '<div class = "output">'

    fetch('https://reddit-rss-api.deno.dev/r/copypasta')
        .then(r => r.json())
        .then(r => r.items)
        .then(r => {
            i = Math.floor(Math.random() * (r.length - 1))
            c += r[i].title + '<br>'
            c += 'by ' + r[i].author + '<br><br>'
            c += r[i].message + '</div>'
            content.innerHTML += c
        })
}

function Help() {
    const help = [
        'Available commands:',
        'copypasta - random post from r/copypasta',
        'nekofetch - author\'s stats'
    ]

    let c = '<div class = "output">'

    for(let i = 0; i < help.length; i++) {
        if(i > 0) c += '- '
        c += help[i] + '<br>'
    }

    c += '</div>'
    content.innerHTML += c
}

function Nekofetch() {
    const fetch = [
        'class Shitten {',
        '   constructor(): void {',
        '        this.name: string = "Shitten"',
        '        this.level: number = 24',
        '        this.gender: string = "husbando"',
        '        this.mf: any = idiot',
        '   }',
        '',
        '   Life(): any {',
        '       this.life: void = null',
        '       this.difficulty: string = "hardcore"',
        '       return End(this.life)',
        '   {',
        '',
        '   Tech(): void {',
        '       this.os: string = Arch["btw"]',
        '       this.langs: string[] = ["bash", "python", "html", "css"]',
        '       this.langs.push("gdscript", "lua", "js", "ts")',
        '   }',
        '}',
    ]

    let c = '<div class = "output"><pre>'

    fetch.forEach(l => {
        c += l + '<br>'
    })

    c += '</pre></div>'
    content.innerHTML += c
}
