//https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c
import {createContext,useState,useEffect}from'react';

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [district,setDistrict]=useState([])//選取的行政區列表
  useEffect(() => {
    const api=async()=>{
    try {
      const res=await fetch('https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c')
      const apidata=await res.json()
      setData(apidata.data.XML_Head.Infos.Info) 
      setIsLoading(false);
      console.log(apidata.data.XML_Head.Infos.Info);
    } catch (err) {
      console.log(err)
    }
  }
  api()
  }, []);

  // useEffect(()=>{
  //     if(data.length>1){
  //     data.map((e)=>{
  //        setDistrict(...district,[e.Add])
  //       })
  //     }
  //   }
  // ,[data])
  return (
    <ApiContext.Provider value={{ data, isLoading,district,setDistrict}}>
      {children}
    </ApiContext.Provider>
  );
};
  


