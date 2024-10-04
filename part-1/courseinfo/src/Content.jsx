import Part from './Part.jsx'


export default function Content({parts}){
  return(
    <>


{
parts.map((value,idx)=>(
  
  <Part key={idx} name={value.name} exercise={value.exercises}/> 
))
}



    </>
  )
}