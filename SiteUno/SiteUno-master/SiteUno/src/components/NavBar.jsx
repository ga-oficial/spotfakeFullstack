import logo from "/UnoLogo.png"

export default function NavBar() {
    return (
        <nav className={style.navbar}>
            <Link to='/'>
                <img src={logo} alt="UNO" />
            </Link>
            <ul className={style.lista}>
                <li className={style.item}>
                    <Link to='/'>home</Link>
                </li>
                <li className={style.item}>
                    <Link to='/sobre'>sobre</Link>
                </li>
                <li className={style.item}>
                    <Link to='/regras'>regras</Link>
                </li>
                <li className={style.item}>
                    <Link to='/ajuda'>ajuda</Link>
                </li>
            </ul>
        </nav>
    )
}