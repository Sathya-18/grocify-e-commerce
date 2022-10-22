import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context";
import './searchbar.css';

function SearchBar(){
    const item = useContext(MyContext);
    const [filterData, setData] = useState([]);
    const [word, setword] = useState("");
    const navigate = useNavigate();

    const handleFilter = (e) =>{
        const searchword = e.target.value;
        setword(searchword);
        const newFilter = item.search.filter((v)=>{
            
            return v.name.toLowerCase().includes(searchword);
        })
        if(searchword === ""){
            setData([])
        }else{
            setData(newFilter)
        }
        
    }
    return(
        <div className="search">
            <div className="searchbar">
                <input type="text" value={word} onChange={handleFilter}></input>
                <div className="searchicon"><i className='fa fa-search'></i></div>
            </div>
            {filterData.length !== 0 && (
                <div className="dataResults">
                {filterData.slice(0,7).map((value)=>{
                    return <div className="dataItem" key={value.name} onClick={()=>{
                        navigate(`/${value.link}/${value.id}`)
                        setword("")
                        setData([])
                    }}>{value.name}</div>
                    
                })}
            </div>
           ) }

            
        </div>
    )
}

export default SearchBar;