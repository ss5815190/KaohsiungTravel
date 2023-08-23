//https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c
import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [disSelect, setDisSelect] = useState([]); //行政區選項
  const [district, setDistrict] = useState([]); //列出的行政區列表
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const api = async () => {
      try {
        const res = await fetch(
          "https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c"
        );
        const apidata = await res.json();
        setData(apidata.data.XML_Head.Infos.Info);
        setIsLoading(false);
        console.log("一開始的資料", apidata.data.XML_Head.Infos.Info);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        data,
        isLoading,
        district,
        setDistrict,
        disSelect,
        setDisSelect,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
