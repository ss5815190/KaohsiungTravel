//https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c
import {createContext,useState,useEffect}from'react';

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      .then(response => response.json())
     .then(apidata => {
        setIsLoading(false);
        console.log(apidata.data.XML_Head.Infos.Info); 
        setData(apidata.data.XML_Head.Infos.Info);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ data, isLoading}}>
      {children}
    </ApiContext.Provider>
  );
};
  


