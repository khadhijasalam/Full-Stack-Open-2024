const Button =(props)=>{
  return(
    <>
    <button onClick={props.clickFunction}>{props.text}</button>

    </>
  )
}
export default Button;