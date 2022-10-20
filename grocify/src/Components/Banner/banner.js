import img1 from '../../assets/2.jpg'
import styleB from './banner.module.css';

function Banner(){
    return(
        <div className={styleB.container}>
            <div >
                <img src={img1} className={styleB.container1}></img>
            </div>
            <div className={styleB.text}>
                <h1>Eat well</h1>
                <h1>Live well</h1>
                <p>Shop now!</p>
            </div>
        </div>
    )
}

export default Banner;














// import styleB from './banner.module.css';
// // import img1 from '../../assets/1.jpg';

// import { useState } from 'react';
// import { useEffect } from 'react';

// function Banner() {
//     const img1 = 'https://raw.githubusercontent.com/Sathya-18/grocify-e-commerce/main/grocify/src/assets/1.jpg';
//     const img2 = 'https://images.pexels.com/photos/9705830/pexels-photo-9705830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
//     const img3 = 'https://images.pexels.com/photos/4020557/pexels-photo-4020557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     const img = [img1,img2,img3];
//     const [image, setImage] = useState(0)

//     useEffect(()=>{
//         console.log(image);
//     },[image])


//     return (
//         <div className={styleB.container}>
//             <img src={img[image]} className={styleB.container1} alt="banner"></img>
//             <div className={styleB.left }  onClick={()=>{
//                 if(image>0){
//                     setImage(image-1)
//                 }
//             }}>&#10094;</div>
//             <div className={styleB.right} onClick={()=>{
//                 if(image<img.length-1){
//                     setImage(image+1);
//                 }
//             }}
//             >&#10095;</div> 
//         </div>
//     )
// }

// export default Banner;