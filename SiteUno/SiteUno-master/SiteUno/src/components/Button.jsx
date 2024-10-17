import style from './Button.module.css';

export default function Button({ titulo, link }) {
    return (
        <>
            <a href={link} target="blank"><button className={style.button}>{titulo}</button></a>
        </>
    )
}