import React from "react";


const Search = (props)=>{
const {tarih,changeHandler}=props


    return(
        <div>
            <input name="date" type="date" onChange={(e)=>changeHandler(e.target.value)} value={tarih}/>
        </div>
    )
}

export default Search