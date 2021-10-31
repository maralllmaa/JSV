import NavItem from "./NavItem";


const Navigation = props => {
    return <ul className="hidden md:flex font-bold uppercase">
        {
            props.navlist.map((el, index) => (
                <NavItem key={`nav-${index}`} value={el} />
            ))
        }
    </ul>
}

export default Navigation;