import './CardProduct.css'

function CardProduct({ image, name, category }) {
  return (
    <div className="CardProduct">
      <img src={image} alt={name} />
      <div className="CardProduct-description">
        <h4 className="CardProduct-name">{name}</h4>
        <p className="CardProduct-category">{category}</p>
      </div>
    </div>
  );
}

export default CardProduct