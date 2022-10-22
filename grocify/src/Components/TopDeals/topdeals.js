import { useContext, useEffect, useState } from 'react';
import styleTd from './td.module.css';
import TopItems from './topitems';
import MyContext from '../../context';

function TopDeals(){
    const [gro, setGro] = useState([]);
    const [veg,setVeg] = useState([]);
    const [fru, setFru] = useState([]);
    const [sna, setSna] = useState([]);

    // const [topDeals, setTop] = useState([]);
    const add = useContext(MyContext);
    
    


    // sending an array instance to json server

    // const addItems = async(ar)=>{
    //     await Promise.all(
    //         ar.map((item)=>{
    //             fetch('http://localhost:3000/topdeals',{
    //                         method: 'POST',
    //                         headers: {
    //                             'Accept': 'application/json,text/plain,*/*',
    //                             'Content-Type': 'application/json',
    //                             'Accept-Charset': 'utf-8'
    //                         },
    //                         body: JSON.stringify(item)
    //                     })
    //                 })
    //     )
    // }

    // addItems(topDeals)

    function srt(a,b){
        return b.offer-a.offer
    }

    const sortedArr = add.search.sort(srt)



    useEffect(()=>{
        add.setsearch(()=>{
            return [...gro, ...veg, ...fru, ...sna]
        });
    }, [gro, veg, fru, sna])


    useEffect(
        ()=>{
           fetch('http://localhost:3000/grocery').then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return false;
            }}).then(data=>setGro(data))

           fetch('http://localhost:3000/fruits').then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return false;
            }}).then(data=>setFru(data))

           fetch('http://localhost:3000/vegetables').then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return false;
            }}).then(data=>setVeg(data))

           fetch('http://localhost:3000/snacks').then((res)=>{
            if(res.ok){
                return res.json();
            }else{
                return false;
            }}).then(data=>setSna(data))

        }
    ,[])

    // useEffect(()=>{
    //     setTop(()=>{
    //         return [...gro,...veg,...fru,...sna]
    //     })
    // },[veg,gro,fru,sna])

    


    return(
        <div className={styleTd.container}>
            <div className={styleTd.container2}>
                <h1>Top Deals</h1>
            <div className={styleTd.wrap}>
            {
                sortedArr.map((data,i)=>{
                    if(i<12){
                        return(
                            <TopItems key={data.name} id={data.id} name={data.name} quantity={data.quantity} offer={data.offer} value={data.value} link={data.link} price={data.price}  item={data} image={data.url}></TopItems>
                        )
                    }
                   
                })
            }
        </div>
            </div>
        </div>
        
    )
}

export default TopDeals;
