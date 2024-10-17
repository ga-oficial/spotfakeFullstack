import Container from "../components/layout/Container"

export default function Regras() {
    return (
        <Container >
            <h1>Regras</h1>
            <p><h2>Objetivo do Jogo: </h2>
                O objetivo do Uno é ser o primeiro a alcançar 500 pontos, que são obtidos ao vencer rodadas e ao acumular pontos das cartas restantes dos oponentes.

                <h2>Preparação do Jogo:</h2>
                <strong>Distribuição das Cartas: </strong> Cada jogador recebe 7 cartas. As cartas restantes formam o monte de compra, e a carta do topo desse monte é virada para iniciar o monte de descarte.
                <br />
                <strong>Carta Inicial: </strong> A carta do topo do monte de descarte define a cor e o número para a primeira jogada. Se a carta inicial for uma carta de ação, ela deve ser seguida conforme suas regras específicas.
                <br />
                <h2>Como Jogar:</h2>
                <strong>Turno do Jogador: </strong> Em cada turno, o jogador deve combinar uma carta da sua mão com a carta no topo do monte de descarte. A combinação pode ser feita por número, cor ou símbolo (se for uma carta de ação).
                <br />
                <strong>Cartas Especiais: </strong>
                <ul>
                    <li><strong>+2:</strong> O próximo jogador deve comprar 2 cartas e perder a vez.</li>
                    <li><strong>Inverter:</strong> Muda a direção do jogo.</li>
                    <li><strong>Pular:</strong> O próximo jogador perde a vez.</li>
                    <li><strong>Coringa:</strong> Permite que o jogador escolha uma nova cor para o jogo.</li>
                    <li><strong>Coringa +4:</strong> Permite que o jogador escolha uma nova cor e força o próximo jogador a comprar 4 cartas e perder a vez. (Só deve ser usado se o jogador não tiver cartas da cor escolhida).</li>
                    <li><strong>Descarte:</strong> O jogador descarta uma carta que combine com a carta no topo do monte de descarte ou usa uma carta especial. Se o jogador não puder jogar uma carta, ele deve comprar uma do monte de compra. Se a carta comprada puder ser jogada, o jogador pode jogá-la imediatamente; caso contrário, ele deve mantê-la e passar a vez.</li>
                </ul>


                <strong>Uno:</strong> Quando um jogador tem apenas uma carta na mão, deve gritar "Uno!" Se outro jogador perceber que ele não gritou "Uno" antes que o próximo jogador jogue, o jogador deve comprar 2 cartas como penalidade.
                <br />
                <strong>Vencer a Rodada:</strong> A rodada termina quando um jogador descarta todas as suas cartas. Os pontos são então contados com base nas cartas restantes na mão dos outros jogadores:
                <ul>
                    <li><strong>Cartas Numéricas:</strong> O valor impresso na carta.</li>
                    <li><strong>Cartas de Ação</strong> (+2, Inverter, Pular): 20 pontos cada.</li>
                    <li><strong>Cartas Coringa e Coringa +4:</strong> 50 pontos cada.</li>
                </ul>

                <h2>Fim do Jogo:</h2>
                O jogo pode continuar até que um jogador alcance 500 pontos ou qualquer outro número de pontos combinado previamente pelos jogadores. Também é possível jogar em várias rodadas e definir um número de rodadas para determinar o vencedor.

                Essas são as regras básicas do Uno, mas há variações e regras adicionais que podem ser usadas para adaptar o jogo ao gosto dos jogadores. <br />Divirta-se jogando!</p>
        </Container>
    )
}