import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "./GetApi";

const Card = (e) => {
  return (
    <div className="card">
      <div className="card-grid">
        <div className="card-top">
          <img src={e.img} alt="" />
          <h2>{e.name}</h2>
          <p>{e.area}</p>
        </div>
        <div className="card-info">
          <div className="timeopen">
            <img src="./images/icons_clock.png" alt="clock" />
            <p>{e.opentime}</p>
          </div>
          <div className="address">
            <img src="./images/icons_pin.png" alt="pin" />
            <p>{e.address}</p>
          </div>
          <div className="phone">
            <img src="./images/icons_phone.png" alt="phone" />
            <p>{e.phone}</p>
          </div>
          <div style={{display:e.tickinfo==='免費入園'?'flex':'none'}} className="ticket">
            <img src="./images/icons_tag.png" alt="ticket" />
            <p>{e.tickinfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Displaypage = () => {
  const { district, currentPage } = useContext(ApiContext);
  const [btnDisplay,setBtnDisplay]=useState(false);
  
  const handleScroll = () => {
    window.scrollY > 0
    ?setBtnDisplay(true)
    :setBtnDisplay(false)
    }
    
  //實時監聽滾動事件
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="content">
      <h2 style={{ display: district.length > 0 ? "block" : "none" }}>
        {district.length > 0 ? district[0].Add.slice(6, 9) : ""}
      </h2>
      {
        district
          .map((e) => (
            <Card
              key={e.Id}
              img={e.Picture1}
              opentime={e.Opentime}
              phone={e.Tel}
              address={e.Add}
              name={e.Name}
              area={e.Add.slice(6, 9)}
              tickinfo={e.Ticketinfo}
            />
          ))
          .slice((currentPage - 1) * 8, currentPage * 8) //0 7 8 15 16 23
      }

      <button
        onClick={() => {
          //點擊之後捲動到最上面
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="totop"
        style={{display:btnDisplay ===false ?'none':'block'}}
      >
        <img src="./images/icon_goTop.png" alt="" />
      </button>
    </main>
  );
};
export default Displaypage;
