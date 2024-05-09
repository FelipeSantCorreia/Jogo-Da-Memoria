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
        for (let i = 0; i< cards.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','images/board.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }

    }
    //checagem de combinações
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneld = cardsChosenld[0]
        const optionTwold = cardsChosenld[1]

        //verificar clique na mesma imagem
        if(optionOneld == optionTwold){
            cards[optionOneld].setAttribute('src','images/board.png')
            cards[optionTwold].setAttribute('src','images/board.png')
            alert('Você clicou na mesma imagem')
        }
        //verificar combinações se click em imagens diferentes
        else if (cardsChosen[0] === cardsChosen[1]){
            alert('')
        }
    }
});