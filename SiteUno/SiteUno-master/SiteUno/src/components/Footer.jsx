import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import style from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <ul className={style.lista}>
                <li className={style.item}>
                    <FaInstagram />
                </li>
                <li className={style.item}>
                    <FaFacebook />
                </li>
                <li className={style.item}>
                    <FaXTwitter />
                </li>
            </ul>
            <p>
                <span>UNO</span> &copy; 2024
            </p><p>
                3B: Emily Serafim | Ana Luiza | Eloisa 
            </p>
        </footer>
    )
}