import ItemCount from "./ItemCount"



const ItemListContainer = ({nombre, precio,}) =>{
    return(
    <div>
        <p>Prenda: {nombre}</p>
        <p>Precio: {precio}$</p>
        <button>Comprar</button>
        <ItemCount />
    </div>
    )
}


export default ItemListContainer