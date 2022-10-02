import styleC from "./ct.module.css";
import Items from "./items";
import img1 from "../../assets/grocery.jpg";
import img2 from "../../assets/vegetables.jpg";
import img3 from "../../assets/fruits.jpg";
import img4 from "../../assets/snacks.jpg";
// import img5 from "../../assets/beverages.jpg";



function Catogories() {

    let catogories = [
        {
            name: "Groceries",
            link: 'grocery',
            image: img1
        },
        {
            name: "Vegetables",
            link: 'vegetables',
            image: img2
        },
        {
            name: "Fruits",
            link: 'fruits',
            image: img3
        },
        {
            name: "Snacks",
            link: 'snacks',
            image: img4
        }
        // ,
        // {
        //     name: "Beverages",
        //     link: 'beverages',
        //     image: img5
        // }
    ]

    return (
        <div className={styleC.container1}>
            <div className={styleC.container}>
                {
                    catogories.map((data) => {
                        return (
                            <Items key={Math.random()} name={data.name} link={data.link} image={data.image}></Items>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catogories;