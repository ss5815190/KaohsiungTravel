import React, { useContext } from 'react'
import { ApiContext } from './GetApi'

const Card=(img,opentime,phone,address,name,area)=>{
    console.log(img,opentime,phone,address,name,area)
    // return(
    //     <div className='card'>
    //         <img src={img} alt="" />
    //     </div>
    // )
}
const Displaypage = () => {
    const{district}=useContext(ApiContext)
  return (
    <main className='content'>
    {district.map((e,id)=>(
        <Card key={id} img={e.Picture1} opentime={e.Opentime} 
         phone={e.Tel} address={e.Add} name={e.Name} />
    ))}
    </main>
  )
  
}
export default Displaypage