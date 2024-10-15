

function criaCartao (emote, categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `    
    <div class="content flashcard" onclick="showAnswer(this)">
    <div class="flip">
        <div class="front">
            <h3>${emote} ${categoria}</h3>
            <div class="cartao-pergunta question">
                <p>${pergunta}</p>
            </div>
        </div>
        <div class="back">
            <div class="cartao-resposta answer">
                <p>${resposta}</p>
            </div>
        </div>
    </div>
</div>
    `

    container.appendChild(cartao)
}       

function showAnswer(card) {
    const answer = card.querySelector('.cartao-resposta')
    if(answer.style.display === 'none'){
        answer.style.display = 'block'
    }
    else {
        answer.style.display = 'none'
    }
}
