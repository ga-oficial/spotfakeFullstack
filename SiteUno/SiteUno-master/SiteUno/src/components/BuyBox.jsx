import Button from './Button';
import style from './BuyBox.module.css'

export default function BuyBox({ img, preco, nome, descricao, evento }) {
    return (
        <>
            <div className={style.row}>
                <div>
                    <img src={img} alt={img.name} />
                </div>
                <div className={style.column}>
                    <p>
                        <strong>{nome}</strong>
                    </p>
                    <p>
                        R$<span>{preco}</span>
                    </p>
                    <p>{descricao}</p>
                    <Button titulo={'Comprar agora'} link={evento} />
                </div>
            </div>
        </>
    )
}