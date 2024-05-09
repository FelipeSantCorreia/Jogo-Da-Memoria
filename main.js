document.addEventListener('DOMContentLoaded', () => {
    //opções de cartas
    const cards = [
        {
            name: 'android',
            img: 'images/android.png'
        },
        {
            name: 'chrome',
            img: 'images/chrome.png'
        },
        {
            name: 'git',
            img: 'images/git.png'
        },
        {
            name: 'stackoverflow',
            img: 'images/stackoverflow.png'
        },
        {
            name: 'linux',
            img: 'images/linux.png'
        },
        {
            name: 'github',
            img: 'images/github.png'
        },
        {
            name: 'android',
            img: 'images/android.png'
        },
        {
            name:'chrome',
            img: 'images/chrome.png'
        },
        {
            name: 'git',
            img: 'images/git.png'
        },
        {
            name: 'stackoverflow',
            img: 'images/stackoverflow.png'
        },
        {
            name: 'linux',
            img: 'images/linux.png'
        },
        {
            name: 'github',
            img: 'images/github.png'
        }
    ]
    //embaralhar todas as cartas
    cards.sort(() => 0,5 - Math.random())
    //recuperar elementos
    const board = document.querySelector('.board')
    const resultView = document.querySelector('#result')
    let cardsChosen = []//cartas escolhidas
    let cardsChosenld = []//ids das cartas escolhidas para caso de click na mesma imagem
    let cardsWon = []//cartas combinadas
    //criar o quadro de cartas
    function createBoard(){
        
    }
});