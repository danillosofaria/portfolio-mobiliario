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
          <CardList limit={9}></CardList>
          <div className='container-buttonMore-productSection'>
          <a href="/work"><Button_more size="sm" /></a></div>
        </div>
    )
}

export default ProductsSection