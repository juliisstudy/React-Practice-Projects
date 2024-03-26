import { useState} from "react" ; 
import data from "./data";
import "./style.css";

export default function MultiSelection(){
    const [selected,setSelected] = useState(null);
    const [enableMultiSelection,setEnableMultiSelection] = useState(false);
    const [multiple,setMultiple] = useState([]);

    function handleSignleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null :getCurrentId)
    }
    function hanleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrentId === -1){
            cpyMultiple.push(getCurrentId)
        }else{
            cpyMultiple.splice(findIndexOfCurrentId,1)
        }
        setMultiple(cpyMultiple)
    }

    return (
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>
                MultiSelection
            </button>
            <div className="accordian">
                {data&&data.length > 0 ?(data.map((dataItem)=>(
                    <div className="item" key = {dataItem.id}>
                        <div onClick ={enableMultiSelection ?
                        ()=>hanleMultiSelection(dataItem.id)
                        :()=>handleSignleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            </div>
                            {enableMultiSelection
                            ?multiple.indexOf(dataItem.id)!==-1&&(
                                <div className="content">{dataItem.answer}</div>
                            ):selected===dataItem.id&&(
                                <div className="content">{dataItem.answer}
</div>                            )}
</div>
                ))
                ):(<div>no data found</div>)}
            </div>
        </div>
    )
}