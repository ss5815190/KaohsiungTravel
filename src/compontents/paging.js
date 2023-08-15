import React, { useContext, useEffect } from 'react'
import { ApiContext } from './GetApi.js';

const Paging = () => {
  const{currentPage,setCurrentPage}=useContext(ApiContext);
  const{totalPages,setTotalPages,district}=useContext(ApiContext);
  const prev=()=>{
    if(currentPage>1)
    setCurrentPage(currentPage-1) 
  }
  const next=()=>{
    if(totalPages>0 && currentPage<totalPages)
    setCurrentPage(currentPage+1)
  }
  //debug
  useEffect(()=>{
    setCurrentPage(1)
    setTotalPages(Math.round((district.length)/8))
    console.log('換地區')
    console.log('行政區',district)
  },[district])
  useEffect(()=>{
    console.log('當前頁面',currentPage)
    // 換頁時滑動到上方
    // 使用 getBoundingClientRect() 方法來取得該元素在畫面中的距離
    // top 屬性是元素距離頁面頂部的距離，window.scrollY則是一個讀取器
    // ，返回文檔從上到下捲動的像素值
    // 兩者相加得到元素在頁面的絕對高度
    const distop=document.getElementById("distop").getBoundingClientRect()
    const distopH=distop.top + window.scrollY
    window.scrollTo({top: distopH,behavior: "smooth"})
  },[currentPage])
  useEffect(()=>{
    console.log('當前地區總頁數',totalPages)
  },[totalPages])
  
  return (
    <div className="paging">
        <button onClick={prev}
        className="prev">{"< prev"}</button>
          <div>{currentPage}</div>
        <button onClick={next}
        className="next">{"next >"}</button>
    </div>
  )
}
export default Paging;
