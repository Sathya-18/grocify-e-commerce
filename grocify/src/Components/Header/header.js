import styles from './header.module.css';
import MyContext from '../../context';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMember } from '../../redux/slice/userslice';
import { logout } from '../../redux/slice/userslice';

function Header(){
    const navigate = useNavigate();
    
    let cartItems = useContext(MyContext);
    const user = useSelector(selectMember);
    const dispatch = useDispatch();
    const [cartNo, setCartNo] = useState(0);
    
    useEffect(()=>{
        setCartNo(cartItems.cart.length)
    },[cartItems.cart])

    // useEffect(() => {
    //     return () => console.log(user.isLogin);
    // },[]);
    
    const updateLogout = ()=>{
        dispatch(logout());
    }

    return(
        <header className={styles.container}>
            <div className={styles.header}>
            <h1 onClick={()=>{
                navigate('/')
            }}>Grocify</h1>

            <div className={styles.search}>
            <input type='text' className={styles.input} placeholder="Search products here ..."></input>
            <button className={styles.searchbtn}><i className='fa fa-search'></i></button>
            </div>
            
            {user.isLogin ? <p onClick={updateLogout}><i className='fa fa-sign-out'></i> Logout</p> : <p onClick={()=>{navigate('login')}}><i className='fa fa-sign-in'></i> Login</p>}
            
            {/* <p>Sign up</p> */}
            <p onClick={()=>{
                if(user.isLogin === false){
                    alert("Please Login to see the cart items")
                }else{
                    navigate('/cart')
                }
                
            }}><i className='fa fa-shopping-cart'></i> Cart(<span>{cartNo}</span>)</p>
            </div>
        </header>
    )
}

export default Header;
