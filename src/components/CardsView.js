import ShopCard from './ShopCard';

function CardsView(props) {
    //console.log(props);
    return (
        <div className="cards">
            {
                props.cards.map((card, id) => {
                    console.log(card);
                    return <ShopCard card={card} key={id}/>
                })
            }
        </div>
    )
}

export default CardsView