import './ProducsSection.css'
import CardList from '../components/CardList' 
import Button_more from './Button_more'

function ProductsSection () {
    return (
        <div className="products-section">
          <div className="header-products">
            <div className="title-productsSection">
              <h3>the essentials of design</h3>
              <h2>PRODUCTS</h2>
            </div>
          </div>
          <CardList></CardList>
          <div className='container-buttonMore-productSection'><Button_more size="sm"></Button_more></div>
        </div>
    )
}

export default ProductsSection