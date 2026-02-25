
const featuresZ = {
    feature1: {
        heading: "Fast Shipping", 
        paragraph: "On all orders over $50",
        emoji: "🚚"
    }, 
    feature2: {
        heading: "Secure Payment", 
        paragraph: "100% secure checkout",
        emoji: "🔒"
    }, 
    feature3: {
        heading: "Premium Quality",
        paragraph: "Authentic products guaranteed",
        emoji: "⭐"
    }
}

const clothZ = {
    product1: {
        img: "https://placehold.co/400x400/333/FFF?text=Bomber+Jacket",
        info: {
            category: "Outerwear",
            title: "Vintage Bomber Jacket", 
            price: "$120.00"
        }
    }, 
    product2: {
        img: "https://placehold.co/400x400/333/FFF?text=Graphic+Tee", 
        info: {
            category: "Tops", 
            title: '"Speed" Graphic Tee', 
            price: "$35.00"
        }
    }, 
    product3: {
        img: "https://placehold.co/400x400/333/FFF?text=Slim+Jeans", 
        info: {
            category: "Bottoms", 
            title: "Tactical Slim Jeans", 
            price: "$75.00"
        }
    }, 
    product4: {
        img: "https://placehold.co/400x400/333/FFF?text=Chelsea+Boots", 
        info: {
            category: "Footwear", 
            title: "Classic Leather Boots", 
            price: "$150.00"
        }
    }
}

const carZ = {
    product1: {
        img: "https://placehold.co/400x400/111/FFF?text=Custom+'69+Camaro", 
        info: {
            category: "Muscle Car", 
            title: "Custom '69 Camaro",
            price: "$12.00"
        }
    }, 
    product2: {
        img: "https://placehold.co/400x400/111/FFF?text=Batmobile", 
        info: {
            category: "Super Hero", 
            title: "Tumbler Batmobile",
            price: "$15.00"
        }
    }, 
    product3: {
        img: "https://placehold.co/400x400/111/FFF?text=Porsche+935", 
        info: {
            category: "Racing", 
            title: "Gulf Oil Porsche 935",
            price: "$25.00"
        }
    }, 
    product4: {
        img: "https://placehold.co/400x400/111/FFF?text=Shelby+Cobra", 
        info: {
            category: "Vintage", 
            title: "Shelby Cobra 427",
            price: "$10.00"
        }
    }
    
}


export default function App() {
    return (
        <>
        <header className="hero">
        <h1>Dress Sharp. Drive Fast.</h1>
        <p>Premium streetwear for men and premium Hot Wheels for the collector.</p>
        <button className="btn">Shop Now</button>
        </header>

        <div className="features">
            {
                Object.entries(featuresZ).map(([key, { heading, paragraph, emoji }]) => (
                    <div className="feature" key={key}>
                        <div className="feature-icon">{emoji}</div>
                        <h2>{heading}</h2>  
                        <p>{paragraph}</p>
                    </div>
                ))
            }
        </div>

        <div className="container" id="clothing">
            <div className="section-header">
                <h2 className="section-title">The Apparel Drop</h2>
                <p 
                style={{
                    color: '#888', 
                    marginBottom: '2rem'
                }}
                >Fresh streetwear for the modern man</p>
            </div>
            <div className="product-grid">
                {
                    Object.entries(clothZ).map(([key, { img, info: { category, title, price } }]) => (
                        <div className="product-card" key={key}>
                            <div className="product-image">{img ? <img src={img} alt={title} /> : <div className="placeholder">Image</div>}</div>
                            <div className="product-info">
                                <p className="product-category">{category}</p>
                                <h3 className="product-title">{title}</h3>
                                <p className="product-price">{price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="split-banner">
            <div className="split-half fashion-bg">
                <div className="overlay">
                    <h2>New Arrivals: Streetwear</h2>
                    <p style={{
                        marginBottom: '1rem'
                    }}>Check out the latest drop</p>
                    <button className="btn">View Collection</button>
                </div>
            </div>
            <div className="split-half car-bg">
                <div className="overlay">
                    <h2>Treasure Hunt Series</h2>
                    <p style={{
                        marginBottom: '1rem'
                    }}>Find the rare ones</p>
                    <button className="btn">Find Rare Cars</button>
                </div>
            </div>
        </div>

        <div className="container" id="hotwheels">
            <h2 className="section-title">
                The Garage (Hot Wheels)
            </h2>
            <p 
            style={{
                color: '#888', 
                marginBottom: '2rem'
            }}
            >Authentic diecast collectibles</p>
        </div>
        <div className="product-grid">
            {
                Object.entries(carZ).map(([key, { img, info: { category, title, price } }]) => (
                    <div className="product-card" key={key}>
                        <div className="product-image">{img ? <img src={img} alt={title} /> : <div className="placeholder">Image</div>}</div>
                        <div className="product-info">
                            <p className="product-category">{category}</p>
                            <h3 className="product-title">{title}</h3>
                            <p className="product-price">{price}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className="newsletter">
            <h2>Join the Crew</h2>
            <p>Get exclusive drops and deals on cars and clothes.</p>
            <form>
                <input type="email" placeholder="Enter our email address" />
                <button type="submit" className="btn">Subscribe</button>
            </form>
        </div>

        </>
    )
}