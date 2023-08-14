import React, { useContext, useEffect } from 'react'
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
                <div className="timeopen">
                  <img src="./images/icons_clock.png" alt="clock"/>
                  <p>{e.opentime}</p>
                  </div>
                <div className="address">
                  <img src="./images/icons_pin.png" alt="pin"/>
                  <p>{e.address}</p></div>
                <div className="phone">
                  <img src="./images/icons_phone.png" alt="phone"/>
                  <p>{e.phone}</p></div>
              </div>
            </div>
        </div>
    )
}
const Displaypage = () => {
    const{district}=useContext(ApiContext)
    useEffect(()=>{
      const btn=document.getElementById("totop")
      const top=()=>{
        //卷軸沒有向下滾動把置頂按鈕隱藏
        if(window.scrollY!==0){
          //.active opacity 0
          btn.classList.add('active');
        }
        else{
          btn.classList.remove('active');
        }
      }
      // top()
      window.addEventListener('scroll', top, true);
      return () => {
        window.removeEventListener('scroll', top, true);
     };
    }
    ,[])
  return (
    <main className='content'>
    <h2 style={{ display: district.length>0 ? 'block' : 'none' }}>
    {district.length>0 ? district[0].Add.slice(6,9) : ''}
    </h2>
    {district.map((e,id)=>(
        <Card key={id} img={e.Picture1} opentime={e.Opentime} 
         phone={e.Tel} address={e.Add} name={e.Name} 
         area={e.Add.slice(6,9)}/>
    ))}
    <button onClick={() =>{
      //點擊之後捲動到最上面
      window.scrollTo({top: 0,behavior: "smooth"})
      }}  className="totop" id='totop'>
    <img src="./images/icon_goTop.png" alt="" />
    </button>
    </main>
  )
  
}
export default Displaypage