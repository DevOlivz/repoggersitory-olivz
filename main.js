function criaCartao (emote, categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `    
    <div class="cartao-conteudo flashcard">
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
 document.querySelectorAll('.flashcard').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });

    container.appendChild(cartao)
}       