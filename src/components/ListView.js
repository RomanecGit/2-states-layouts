import ShopItem from './ShopItem';

function ListView(props) {
    return (
        <table className="items">
            {
                props.items.map((item, id) =>
                <ShopItem item={item} key={id}/>
            )}
        </table>
    )
}

export default ListView