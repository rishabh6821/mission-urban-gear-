const listLinks = {
    apparel: {
        name: "Apparel",
        link: "#clothing"
    }, 
    diecast: {
        name: "Diecast",
        link: "#hotwheels"
    }, 
    collections: {
        name: "Collections",
        link: "#" 
    },
    sale: {
        name: "Sale",
        link: "#"
    }
}

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">URBAN<span>
                GEAR</span></div>
            <ul className="nav-links">
              {Object.entries(listLinks).map(([key, { name, link }]) => (
                <li key={key}>
                  <a href={link}>{name}</a>
                </li>
              ))}
            </ul>
            <button className="cart-btn">
                Cart (0)
            </button>
        </nav>
    );
}