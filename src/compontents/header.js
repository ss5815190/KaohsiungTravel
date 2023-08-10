import React, { useContext} from 'react';
import { ApiContext } from './GetApi.js';
import Select from "react-select";

const Header = () => {
  const {data,setDistrict,district}=useContext(ApiContext)
  const options = [
    { value: "", label: "--請選擇行政區--" },
    { value: "左營區", label: "左營區" },
    { value: "楠梓區", label: "楠梓區" },
  ];
  console.log(district)
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