import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import {useState} from 'react';

function Store(props) {
    const [icon, setIcon] = useState("view_module");
    let view;
    switch (icon){
        case "view_module":
            view = <ListView items={props.products}/>
            break;
        case "view_list":
            view = <CardsView cards={props.products}/>
            break;
    }
    return (
        <>
            <div className="switch">
                <IconSwitch icon={icon} onSwitch={(icon) => {
                    setIcon(icon === "view_list"?"view_module":"view_list");
                }}/>
            </div>
            {view}
        </>
    )
}

export default Store