function ShopItem(props) {
    return (
        <tr className="item">
            <td><img src={props.item.img}/></td>
            <td><h2>{props.item.name.toUpperCase()}</h2></td>
            <td className='color'><h5>{props.item.color}</h5></td>
            <td className='price'>${props.item.price}</td>
            <td><button>Add to cart</button></td>
        </tr>
    )
}

export default ShopItem;