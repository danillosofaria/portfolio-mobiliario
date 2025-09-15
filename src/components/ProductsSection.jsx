import './ProducsSection.css'
import CardList from '../components/CardList' 

function ProductsSection () {
    return (
        <div className="products-section">
          <div className="header-products">
            <div className="title-productsSection">
              <h3>the essentials of design</h3>
              <h2>PRODUCTS</h2>
            </div>
            <div>menu</div>
          </div>
          <CardList></CardList>
        </div>
    )
}

export default ProductsSection