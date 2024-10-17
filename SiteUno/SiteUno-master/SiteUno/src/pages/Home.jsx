import React from "react";
import Container from "../components/layout/Container";
import Banner from "/BannerUno.jpg";
import Baralho from "/BaralhoUno.png";
import NoMercy from "/unoNoMercy.png"
import Flip from "/unoFlip.jpg"
import BuyBox from "../components/layout/BuyBox";
import style from "./Home.module.css"

export default function Home() {
    return (
        <>
            <Container >
                <article>
                    <section>
                        <h1>UNO: O jogo da galera!</h1>
                        <img src={Banner} alt="BannerUno" />
                        <p>
                            Procurando uma maneira emocionante de reunir amigos e familiares?
                            Conheça UNO, o jogo de cartas que garante horas de diversão e risadas!
                            nele é possivel jogar com até 10 pessoas alem de ser um jogo para
                            pessoas de qualquer idade.
                        </p>
                        <p>
                            Nesse site é possivel compra o jogo, mas além disso o usuario pode
                            aprender a origem e evolução do baralho ao longo do tempo, as regras do jogo como também as cartas disponiveis e algumas
                            dicas para iniciantes
                        </p>
                    </section>
                    <section>
                        <h1>Adquira o seu já!</h1>
                        <div className={style.compra}>
                            <BuyBox img={Baralho} nome={'baralho Uno Original'} preco={'21,99'} descricao={'O clássico jogo de cartas de combinar cores e números, contém 112 cartas'} evento={'https://www.amazon.com.br/Mattel-W2085-UNO-Original/dp/B00CTH0A1Q/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1NJXTUKO1HOSF&dib=eyJ2IjoiMSJ9.I4uQw2j7hjuiZrIZqgCZtmt8lOTB1N8-TdQksbMRKTAT9-9QBoIlutbs0vx3HnyVpSTTh0g6zAVxsCQ7S9ovpwmK3P1HJ8IyMOJ0vbeOHF6KUddJjPcqIKp5F4CpgKIdBPZvOzQLRktOubyaU55D-y81e--NXpeNLpiItTtSICL25KNP00lyvkoyVBf6R-58vaUJHlL-EYSfvYDwIcZVbjDD7WrhhTiqoMRr8yRBELFjL4Nixc8K-G6INNcKZqadgMq6848d4UXBM-NZp_OFxNzoxarpknSU3b6VXujYOSM.rtENPZDfP1k_6Q7-pvXL-BdP9Nmg6AXZgX8HZI4kNco&dib_tag=se&keywords=uno&qid=1722293095&s=toys&sprefix=uno%2Ctoys%2C302&sr=1-1'} />
                            <BuyBox img={NoMercy} nome={'baralho Uno No Mercy'} preco={'62,99'} descricao={'O jogo UNO Show em No Mercy acrescenta mais 56 cartas, regras especiais e cartas de ação super resistentes para a edição mais brutal de UNO de todos os tempos!'} evento={'https://www.amazon.com.br/Cartas-Crian%C3%A7as-Adultos-Fam%C3%ADlia-Inovadoras/dp/B0CBNR2ML6'} />
                            <BuyBox img={Flip} nome={'baralho Uno Flip'} preco={'69,00'} descricao={'Uno Flip Card Game'} evento={'https://www.amazon.com.br/Mattel-N7857-Uno-Flip/dp/B002UAKLM0/ref=sr_1_4_mod_primary_new?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.I4uQw2j7hjuiZrIZqgCZtmt8lOTB1N8-TdQksbMRKTAT9-9QBoIlutbs0vx3HnyVpSTTh0g6zAVxsCQ7S9ovpwmK3P1HJ8IyMOJ0vbeOHF602RUNl1LwcO3327G7h-uHIFUMAnOi0QGK1Z8w_deytC81e--NXpeNLpiItTtSICL25KNP00lyvkoyVBf6R-58vaUJHlL-EYSfvYDwIcZVbjDD7WrhhTiqoMRr8yRBELFjL4Nixc8K-G6INNcKZqadgMq6848d4UXBM-NZp_OFxNzoxarpknSU3b6VXujYOSM.PGjQJVPhvIgNtcnkq_b28Jfv5Z4xEMPZg12mO-NdUmc&dib_tag=se&keywords=uno&qid=1722298896&s=toys&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-4'} />
                        </div>
                    </section>
                </article>
            </Container>
        </>
    )
}