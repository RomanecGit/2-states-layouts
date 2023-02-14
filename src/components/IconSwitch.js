function IconSwitch ({icon, onSwitch}){
    return (
        <div className="icon">
            <i className="material-icons" onClick={()=>onSwitch(icon)}>{icon}</i>
        </div>
    )
}
export default IconSwitch