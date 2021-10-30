import NavItem from "./NavItem";

const navlist = ["лэндми хэтэвч", "лэндми хувьцаа", "бидний тухай", "мэдээ" , "ажлын байр", "тусламж"]
const Navigation = props => {
    return <ul className="hidden md:flex font-bold uppercase">
        {
            navlist.map((el, index) => (
                <NavItem key={`nav-${index}`} value={el} />
            ))
        }
    </ul>
}

export default Navigation;