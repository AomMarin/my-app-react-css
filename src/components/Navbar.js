import logo from "../assets/icons/character.png"
import coronavirus from "../assets/icons/coronavirus.png"
import virus from "../assets/icons/virus.png"
import sus from "../assets/icons/sus.png"
import cat from "../assets/icons/cat.png"
const   Navbar = () =>{
    return(
        <div className = "flex justify-between item-center">
            <img src={logo} alt = "logo" width = {90} className="cursor-pointer" />
            <ul className = "hidden md:flex">
                <li className="px-2 py-5" >
                    <a href="https://www.facebook.com/" target=" blank">
                    <img src={coronavirus} alt = "coronavirus" width = {30} className="cursor-pointer" />
                    </a>
                </li>
                <li className="px-2 py-5">
                    <a href="https://www.youtube.com/watch?v=jIQ6UV2onyI&pp=ygUJY2F0IHBpeGVs" target=" blank">
                    <img src={cat} alt = "cat" width = {30} className="cursor-pointer" />
                    </a>
                </li>
                <li className="px-2 py-5">
                    <a href="https://www.instagram.com/" target=" blank">
                    <img src={sus} alt = "sus" width = {30} className="cursor-pointer" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

