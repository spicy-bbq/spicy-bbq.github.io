const content = document.querySelector('#content')
const form = document.querySelector('#form')
const input = document.querySelector('#input')

console.log('a')
input.focus()
input.select()

form.addEventListener(
    'submit', function(e) {
        e.preventDefault()
        ProcessInput()
    }
)

function ProcessInput() {
    content.innerHTML += '<div class = "output">$ ' + input.value + '</div>'
    console.log('a')

    form.reset()
    form.scrollIntoView({behavior: 'instant'})
}
