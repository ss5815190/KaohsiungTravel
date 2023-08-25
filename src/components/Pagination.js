import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "./GetApi.js";

const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(ApiContext);
  const { totalPages, setTotalPages, district } = useContext(ApiContext);
  const [pages, setPages] = useState([]);
  //上一頁
  const prev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  //下一頁
  const next = () => {
    if (totalPages > 0 && currentPage < totalPages)
      setCurrentPage(currentPage + 1);
  };

  //設定頁面內容數量
  const pageContent = (num) => {
    if (district.length > 0) {
      setCurrentPage(1);
      setTotalPages(
        //Math.ceil()函式會回傳大於等於所給數字的最小整數
        district.length !== 0 ? Math.ceil(district.length / num) : 0
      );
      console.log("換地區");
      console.log("行政區", district);
    }
  };
  useEffect(() => {
    pageContent(8);
  }, [district]);

  // 換頁時滑動到上方
  useEffect(() => {
    console.log("當前頁面", currentPage);

    // 使用 getBoundingClientRect() 方法來取得該元素在畫面中的距離
    // top 屬性是元素距離頁面頂部的距離，window.scrollY則是一個讀取器
    // ，返回文檔從上到下捲動的像素值
    // 兩者相加得到元素在頁面的絕對高度
    if (district.length > 0) {
      const disTop = document.getElementById("distop").getBoundingClientRect();
      const disTopH = disTop.top + window.scrollY;
      window.scrollTo({ top: disTopH, behavior: "smooth" });
      console.log("滑動");
    }
  }, [currentPage, district]);

  useEffect(() => {
    const tp = Array(totalPages).fill(0);
    setPages(tp);
    console.log("當前地區總頁數", totalPages);
  }, [totalPages]);

  return (
    <div
      style={{ display: totalPages === 0 ? "none" : "flex" }}
      className="paging"
    >
      <button onClick={prev} className="prev">
        {"< prev"}
      </button>
      {pages.map((e, id) => (
        <div
          style={{ color: currentPage === id + 1 ? "#559AC8" : "black" }}
          key={id}
        >
          {id + 1}
        </div>
      ))}
      <button onClick={next} className="next">
        {"next >"}
      </button>
    </div>
  );
};
export default Pagination;
