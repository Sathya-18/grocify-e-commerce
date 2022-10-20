import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './grocery.module.css';


function GroceryDetails() {

    const [data, setData] = useState({})
    const path = useParams();
    const offer = (data.offer / 100) * data.price;
    const offerPrice = (data.price - offer);


    useEffect(() => {
        fetch(`http://localhost:3000/${path.detail}/${path.id}`).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return false
            }
        }).then((input) => {
            setData(input)
        })
    }, [path.detail, path.id])


    return (
        <div className={styles.container}>
            <div className={styles.container3}>
                <div className={styles.image}>
                    <img src={data.url} alt="items"></img>
                    <div className={styles.offer2}>
                        <p>Offer</p>
                        <p><span>{data.offer}</span>%</p>
                    </div>
                </div>
                <div className={styles.details2}>
                    <h1>{data.name}</h1>
                    <p><s>M.R.P: Rs.<span>{data.price}</span></s></p>
                    <p>Offer Price: Rs.<span>{offerPrice}</span></p>
                    <h2>Product details</h2>
                    <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible
                         so they can buy with confidence and certainty.</p>
                </div>

            </div>

        </div>
    )
}

export default GroceryDetails;