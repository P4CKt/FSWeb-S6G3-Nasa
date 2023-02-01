import React from "react";

const Body=({copyright,explanation,hdurl,media_type,service_version,url,date,title})=>{

    return(
        <div className="body">
            <div>
            <input type="date"/>
            </div>
            <div>
            <h2 >{copyright}</h2>
            <p>{title}</p>
            <img src={url}></img>
                <div className="text-content">
                    <p>{date}</p>
                 <p>{explanation}</p>
                </div>
            
            </div>
            
            <h2>{copyright}</h2>


        </div>
    )
}
export default Body;