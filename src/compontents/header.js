import React, { useContext, useEffect} from 'react';
import { ApiContext } from './GetApi.js';
import Select from "react-select";

const Header = () => {
  const {data,setDistrict,district,disSelect,setDisSelect}=useContext(ApiContext)
  const options = [
    { value: "", label: "--請選擇行政區--" },
    { value: "左營區", label: "左營區" },
    { value: "楠梓區", label: "楠梓區" },
  ];
  useEffect(()=>{
    //把重複地區排除加到選單裡
    const uniqueObjects = data.filter((obj, index, self) => {
      // 找出第一次出現的索引位置
      const firstIndex = self.findIndex(item => item.Add.slice(6,9) === obj.Add.slice(6,9));
      // 只保留第一次出現的物件
      return index === firstIndex;
      
    });
    setDisSelect(uniqueObjects)
    console.log('選單',uniqueObjects)
  },[data])
  
  // useEffect(()=>{
    
  //   })
  // },[disSelect])
  
  
  console.log('行政區',district)
  return (
    <header>
        <img src="./images/the-urban.png" alt="urban"/>
        <h1>高雄旅遊資訊</h1>
        <div className="select">
          <Select options={options}
            defaultValue={options[0]}
            onChange={(item) => setDistrict(data.filter((filter)=>filter.Add.slice(6,9)===item.value))}
          />
        </div>
        
    </header>
  )
}

export default Header;