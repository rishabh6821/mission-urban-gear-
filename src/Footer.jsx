const links = {
    link1: {
        name: "About us", 
        link: "#"
    }, 
    link2: {
        name: "Shipping",
        link: "#"
    }, 
    link3: {
        name: "Returns",
        link: "#"
    }, 
    link4: {
        name: "Contact",
        link: "#"
    }, 
    link5: {
        name: "Privacy Policy",
        link: "#"
    }
}

export default function Footer() {
    return (
        <>
        <div className="logo">
            URBAN
            <span>GEAR</span>
        </div>

        <p>The ultimate destination for men's style and diecast collectibles.</p>

        <div className="footer-links">
            {
                Object.entries(links).map(([key, { name, link }]) => (
                    <a href={link} key={key}>{name}</a>
                ))
            }
        </div>

        {/* <p class="copyright">© 2024 Urban Gear &amp; Diecast. All rights reserved.</p> */}

        </>
    )
}