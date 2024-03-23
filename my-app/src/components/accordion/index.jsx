import { useState } from "react"
import data from "./data"
export default function Accordian(){

    const [selected,setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected?null:getCurrentId);
    }

    return (
        <div>
            <div className = "accordian">
                {
                    data &&  data.length >0?
                    (data.map(dataItem => 
                        <div onClick = {()=>handleSingleSelection(dataItem.id)}key = {dataItem.id}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            {
                            selected === dataItem.id?
                            <div>{dataItem.answer}</div>:null
                            }
                        </div>
                       
                        ))
                    : <div> No data found!</div>
                }
            </div>
        </div>
    )
}