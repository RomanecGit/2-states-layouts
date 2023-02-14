function ShopCard(props) {
    return (
        <div className="card">
            <h2>{props.card.name.toUpperCase()}</h2>
            <h5 className='color'>{props.card.color}</h5>
            <img src={props.card.img}/>
            <span className='price'>${props.card.price}</span>
            <button>Add to cart</button>
        </div>
    )
}

export default ShopCard;