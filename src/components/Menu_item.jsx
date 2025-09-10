import '../components/menu_item.css'

function Menu_item({ label, href, clicked, onClick }) {
  return (
    <div className="menu_item" onClick={onClick}>
      {!clicked && (
        <img className="icon" src="/src/assets/imagens/mais.svg" alt={`Ícone ${label}`} />
      )}
      <a href={href}>{label}</a>
    </div>
  );
}

export default Menu_item;
