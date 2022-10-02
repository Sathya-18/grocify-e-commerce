

function CartItems(props){
    const offer = (props.offer/100)*props.price;
    const offerPrice = props.price - offer;
    return(
        <div>
            <div></div>
            <p>Offer : <span>{props.offer}</span>%</p>
            <h3>{props.name}</h3>
            <p>{props.quantity} <span>{props.value}</span></p>
            <p>Offer Price: Rs.<span>{offerPrice}</span></p>
            <p><s>M.R.P: Rs.<span>{props.price}</span></s></p>
            <button>-</button>
            <span>1</span>
            <button>+</button>
        </div>
    )
}

export default CartItems;