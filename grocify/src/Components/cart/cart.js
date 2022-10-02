import { useContext } from "react";
import CartItems from "./cartItems";
import MyContext from "../../context";


function Cart(){

    // const [cartItems, setCartItems] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:3000/cart').then((response)=>{
    //         if(response.ok){
    //             return response.json();
    //         }else{
    //             return true;
    //         }
    //     }).then((data)=>{
    //         setCartItems(data);
    //     })
    // })

    const details = useContext(MyContext);


    return(
        <div>
            {
                details.cart.map((data)=>{
                    return(
                    <CartItems key={data.id} name={data.name} quantity={data.quantity} value={data.value} price={data.price} offer={data.offer} ></CartItems>
                )
            })}
        </div>
    )
}

export default Cart;