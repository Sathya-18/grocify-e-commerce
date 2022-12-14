
import { useContext, useState } from 'react';
import MyContext from '../../context';
import cart from './cart.module.css';

function CartItems(props) {
    const details = useContext(MyContext)
    const [count, setCount] = useState(1);
    const offer = (props.offer / 100) * props.price;
    const offerPrice = (props.price - offer);

    return (
        <div className={cart.item}>
            <div className={cart.image}>
                <img src={props.url} alt="items"></img>
                <div className={cart.offer}>
                    <p>Offer</p>
                    <p><span>{props.offer}</span>%</p>
                </div>
            </div>
            <div className={cart.details}>
                <h2>{props.name}</h2>
                <p>Value:  <span>{props.value}</span></p>
                <strong>Offer Price: Rs.<span>{count * Math.round(offerPrice)}</span></strong>
                <p><s>M.R.P: Rs.<span>{count * props.price}</span></s></p>
            </div>
            <div className={cart.button}>
                <div>
                    <button onClick={()=>{
                         setCount(count-1);  
                         props.minus(offerPrice,props.price) 
                         
                        if(count<2){
                            details.remove(props.name)
                            console.log(count);
                        }
                                               
                    }}>{count<2 ? <i className='fa fa-trash'></i> : "-"}</button>
                    <span>{count}</span>
                    <button onClick={()=>{
                        setCount(count+1)
                        props.add(offerPrice,props.price)
                    }}>+</button>
                </div>
            </div>
           
        </div>
    )
}

export default CartItems;