import grstyle from './grocery.module.css';
import { useEffect, useState } from 'react';
import GroceryItems from './groceryItems';
import { useParams } from 'react-router-dom';


function Grocery() {

    const [list, setList] = useState([]);
    // const [val, setVal] = useState('');
    const path = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/' + path.lists).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return false;
            }
        }).then((data) => {
            data.forEach((item) => {
                let offer = (item.offer / 100) * item.price;
                item.offerPrice = item.price - offer;
            })
            setList(data);
        })
    }, [path.lists])

    let newAr;
    const ascending = () => {
        function low(a, b) {
            return a.offerPrice - b.offerPrice;
        }
        newAr = list.sort(low)
        setList([...newAr])
    }
    const descending = () => {
        function high(a, b) {
            return b.offerPrice - a.offerPrice
        }
        newAr = list.sort(high)
        setList([...newAr])
    }

    //     const handleChange = (e)=>{
    //         setVal(e.target.value)
    //         console.log(val);
    // }

    return (
        <div className={grstyle.container}>

            <div className={grstyle.container2}>
                <h1>{path.lists}</h1>
                <br></br>
                <h3>Filter</h3>
                {/* <select onChange = {handleChange}>
                    <option value= ''>Filter</option>
                    <option value='offerPrice'>Price</option>
                    <option value='offer'>Offer</option>
                </select> */}
                <span>Price: </span>
                <button onClick={() => {
                    ascending() 
                }} className={grstyle.low}>Low to High</button>
                <button onClick={() => {
                    descending()
                }} className={grstyle.high}>High to Low</button>

                <div className={grstyle.wrap}>
                    {
                        list.map((data) => {
                            return (
                                <GroceryItems key={data.id} id={data.id} name={data.name} offer={data.offer} quantity={data.quantity} value={data.value} price={data.price} offerPrice={data.offerPrice} item={data} image={data.url}></GroceryItems>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Grocery;