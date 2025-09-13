import './CardProduct.css'

function CardProduct (){
    return (
        <div className="CardProduct">
            <img src="https://placehold.co/400" alt="" />
            <div className="CardProduct-description">
                <h4 className="CardProduct-name">Nome do produto</h4>
                <p className="CardProduct-category">categoria</p>
            </div>
        </div>
    )
}

export default CardProduct