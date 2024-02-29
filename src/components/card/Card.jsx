import "./card.css"
import Product from "/images/image-product-desktop.jpg"
import Cart from "/images/icon-cart.svg"


export default function card() {
  return <div className="card">
      <div className="img-container">
        <img src={Product} alt="product-image" />
      </div>

    <div className="details-container">
      <p className="montserrat">PERFUME</p>
      <h1 className="name">Gabrielle Essence Eau De Parfum</h1>
      <p className="description">
      A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
      </p>

      <div className="price-container">
        <h1 className="current-price" >$149.99</h1>
        <p className="old-price">$169.99</p>
      </div>

      <button className="btn">
        <img src={Cart} alt="icon-cart" />
        Add to Cart
      </button>

    </div>

  </div>
    

}
