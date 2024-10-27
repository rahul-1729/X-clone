import React,{useState} from 'react'

function Input(props) {
     //Input variable
  const[input,setInput]=useState("")
  // count input string
  const [varinput,setVarinput]=useState(0)
  //visibility of count
  const [visinput,setVisinput]=useState("hidden")
  // border of input
  const [inputborder,setInputborder]=useState("border border-zinc-700")
  // input heading color
  const [inputcolor,setInputcolor]=useState("text-zinc-400")


const handleInput=(e)=>{
  
    setInput(e.target.value)
    setVarinput(e.target.value.length)
    if(e.target.value.length<=props.constraint)
        setVisinput("text-zinc-400")
        else
        setVisinput("text-red-500")
   

}
const inputFocus=()=>{
   setInputborder("border border-sky-500")
   setInputcolor("text-sky-500")
   if(input.length<=50)
    setVisinput("text-zinc-400")
    else
    setVisinput("text-red-500")
  
  
}
const inputBlur=()=>{
  setInputborder("border border-zinc-700")
  setInputcolor("text-zinc-400")
  setVisinput("hidden")
}

 
  return (
    <div className={`w-full h-[60px] rounded flex flex-col p-2 ${inputborder}`}>
    <div className='text-sm flex justify-between'>
      <div className={`${inputcolor}`}>{props.heading}</div>
      <div className={`${visinput}`}>{varinput}/{props.constraint}</div>
      </div>
    <input type="text" className={`focus:outline-none text-gray-200 bg-transparent `} onChange={handleInput} onFocus={inputFocus} onBlur={inputBlur} />

  </div>
  )
}

export default Input
