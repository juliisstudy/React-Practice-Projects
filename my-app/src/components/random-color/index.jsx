import { useEffect,useState } from "react";

export default function RandomColor(){
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color,setColor] = useState("#000000")

  function reandomColorUtiltiy(length){
    return Math.floor(Math.random()*length)
  }
  function handleCreateRandomHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = "#";
    for (let i =0;i<6;i++){
      hexColor +=hex[reandomColorUtiltiy(hex.length)];
    }
    setColor(hexColor)
  }

  function handleCreateRandomRGBColor(){
    const r = reandomColorUtiltiy(256);
    const g = reandomColorUtiltiy(256);
    const b = reandomColorUtiltiy(256)
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(()=>{
    if(typeOfColor === 'rgb'){
      handleCreateRandomHexColor()
    }else{
      handleCreateRandomHexColor()
    }
  },[typeOfColor]);
  return (
    <div style = {{width:"100vw",height:"100vh",background:color}}
    className="container">
      <button onClick={()=>setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick = {()=>setTypeOfColor("rgb")}>Create RGB color</button>
      <button onClick = {
        typeOfColor ==='hex'
        ? handleCreateRandomHexColor
        : handleCreateRandomRGBColor
      }>Generate Random Color</button>
      <div style = {{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        fontSize:'60px',
        marginTop:'50px',
        flexDirection:'column',
        gap:'20px'

      }}>
        <h3>{typeOfColor==='rgb' ? 'RGB Color':'Hex Color'}</h3>
        <h1>{color}</h1>

      </div>


    </div>
  )
}