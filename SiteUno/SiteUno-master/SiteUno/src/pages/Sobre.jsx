import Container from "../components/layout/Container"
import Logos from "/logosUnoTempo.png"
import Criador from "/criadorUno.jpeg"
import style from "./Sobre.module.css"

export default function Sobre() {
    return (
        <Container >
            <h1>Origem e evolução do Uno</h1>
            <p>
                <h2><strong>História do UNO</strong></h2>
                <br />
                <figure className={style.figure}>
                    <img src={Criador} alt="Merle robbins" className={style.image} />
                    <figcaption>Merle Robbins, criador do Uno</figcaption>
                </figure>
                A história do UNO começou com uma ‘briga’ entre um pai fã de jogos de cartas e seu filho birrento.A briga aconteceu em 1971, na cidade de Reading, nos Estados Unidos. Merle Robbins e seu filho, Ray, costumavam jogar ‘Oito Maluco‘ (saiba mais sobre este jogo de cartas logo abaixo!) à noite, mas conflitos sempre apareciam. Merle, em especial, criticava as regras do jogo, e queria disputar as partidas de um jeito diferente. Mas Ray batia o pé e exigia que as regras originais fossem seguidas. Confusão familiar na certa!
                Assim, para ‘melhorar’ as regras do Oito Maluco, Merle criou um novo baralho – esse mesmo que jogamos hoje no <strong>UNO</strong>. A família aprovou as modificações e adotou o novo jogo de Merle com satisfação. Como bons norte-americanos que eram, logo os Robbins viram no divertido jogo uma oportunidade de ganhar dinheiro (quanto a isso, estavam certíssimos!).
                Merle era barbeiro, portanto tinha uma clientela que poderia se transformar facilmente em possíveis compradores do novo baralho. Assim, a família economizou 8.000 dólares na época para produzir 5.000 baralhos de UNO, feitos de maneira bastante simples, e vender na barbearia.
                A estratégia deu certo. Logo, o baralho colorido era mania na cidade. Não demorou muito para uma empresa maior comprar os direitos autorais do UNO, e de lá pra cá, após fusões e aquisições, o UNO se tornou uma das marcas registradas mais famosas dos Estados Unidos, com produtos licenciados e distribuídos em todos os cantos do mundo.

                <br />
                <h2><strong>Porque o nome UNO?</strong></h2>
                <br />
                ‘Uno’ vem da palavra em espanhol (ou italiano) para ‘um’.Grita-se ‘Uno!’ durante a partida quando sobrar apenas uma carta na mão, indicando a iminência de uma vitória.
                <br />
                <h2><strong>Variações do UNO</strong></h2>
                O UNO também já ‘fugiu’ do universo restrito das cartas. O UNO Stacko é uma brincadeira muito parecida com o Jenga, mas que adota o padrão de cores do baralho para ordenar o empilhamento das pecinhas. Você pode jogar UNO Stacko e outras variantes do <strong>Metropoly!</strong>
                <h3><strong>Algumas Variantes do UNO abaixo:</strong></h3>
                <ul>
                    <li>Uno Attack/Extreme</li>
                    <li>Uno Bingo</li>
                    <li>Uno Blast</li>
                    <li>Uno Blitz</li>
                    <li>Uno No Mercy</li>
                </ul>
                <br />
                Variantes que pode se encontrar <strong>METROPOLY BAR!</strong>
                <ul>
                    <li>Uno</li>
                    <li>Uno Stacko</li>
                    <li>Uno Verdade ou Desafio</li>
                </ul>
                <br />
                <h2><strong>Logo:</strong></h2>
                <figure className={style.figure}>
                    <img src={Logos} alt="logos ao longo do tempo" className={style.image} />
                    <br />
                    <figcaption>Com o passar dos anos a logo do uno foi mudando</figcaption>
                </figure>
                <br />
                <h2><strong>O Uno e o Oito Maluco</strong></h2>
                O <strong>UNO</strong> é um parente do <strong>OITO MALUCO</strong>. Ambos fazem parte da família de jogos ‘Stop’, baseados no princípio de que “o jogador só pode descartar uma carta por vez e, se não puder fazê-lo, é obrigado a comprar cartas, sendo vencedor da rodada o primeiro jogador que se livrar de todas as suas cartas”.
                <br />
                As regras do Oito Maluco são bastante similares às do UNO (levando-se em consideração que utiliza-se um baralho tradicional). Por isso mesmo, a pessoa que conhece bem um dos jogos aprende rapidamente a ser um vencedor no outro. O nome desse jogo vem do fato de que as cartas “8” podem corresponder a qualquer naipe, de acordo com a vontade do jogador!</p>
            <br />
        </Container>
    )
}