import React, { useContext } from 'react'
import { ApiContext } from './GetApi'

const Card=(e)=>{
    return(
        <div className='card'>
            <div className="card-grid">
              <div className="card-top" >
                <img src={e.img} alt="" />
                <h2>{e.name}</h2>
                <p>{e.area}</p>
              </div>
              <div className="card-info">
                <div className="timeopen">{e.opentime}</div>
                <div className="address">{e.address}</div>
                <div className="phone">{e.phone}</div>
              </div>
            </div>
        </div>
    )
}
const Displaypage = () => {
    const{district}=useContext(ApiContext)
  return (
    <main className='content'>
    {district.map((e,id)=>(
        <Card key={id} img={e.Picture1} opentime={e.Opentime} 
         phone={e.Tel} address={e.Add} name={e.Name} area={e.Add.slice(6,9)}/>
    ))}
    </main>
  )
  
}
export default Displaypage