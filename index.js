const about_button = document.querySelector('#about_button')
const collection_button = document.querySelector('#collection_button')
const posts_button = document.querySelector('#posts_button')
const bookmarks_button = document.querySelector('#bookmarks_button')
const terminal_button = document.querySelector('#terminal_button')
const buttons = [about_button, collection_button, posts_button, bookmarks_button, terminal_button]
const page = document.querySelector('#page')
const pages = ['about', 'collection', 'posts', 'bookmarks', 'terminal']

var page_num = 0

function ChangePage(num) {
    page_num = num
    
    for(let i = 0; i < buttons.length; i++) {
        if(i == page_num) {
            buttons[i].classList.remove('btn_unsel')
            buttons[i].classList.add('btn_sel')
        }

        else {
            buttons[i].classList.remove('btn_sel')
            buttons[i].classList.add('btn_unsel')
        }
    }

    page.src = 'pages/' + pages[page_num] + '.html'
}

ChangePage(0)
