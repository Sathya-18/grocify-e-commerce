import styles from './header.module.css';
import MyContext from '../../context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Header(){
    const navigate = useNavigate();
    let cartItems = useContext(MyContext);
 
    const [cartNo, setCartNo] = useState(0);
    
    useEffect(()=>{
        setCartNo(cartItems.cart.length)
    },[cartItems.cart])

    return(
        <header className={styles.container}>
            <div className={styles.header}>
            {/* <img></img> */}
            <p onClick={()=>{
                navigate('/')
            }}>Grocify.</p>
            <input type='text' className={styles.input} placeholder="Search here ..."></input>
            <p>Login</p>
            <p>Sign up</p>
            <p onClick={()=>{
                navigate('/cart')
            }}>Cart(<span>{cartNo}</span>)</p>
            </div>
        </header>
    )
}

export default Header;
