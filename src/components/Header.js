import React, { useContext, useEffect } from "react";
import { ApiContext } from "./GetApi.js";
import Select from "react-select";

const Header = () => {
  const { data, setDistrict, disSelect, setDisSelect } =
    useContext(ApiContext);
  const options = [{ value: "", label: "--請選擇行政區--" ,isDisabled:true}];
  useEffect(() => {
    //把重複地區排除加到選單裡
    const uniqueObjects = data.filter((obj, index, self) => {
      // 找出第一次出現的索引位置
      const firstIndex = self.findIndex(
        (item) => item.Add.slice(6, 9) === obj.Add.slice(6, 9)
      );
      // 只保留第一次出現的
      return index === firstIndex;
    });
    //只保留地區
    const updatedOptions = uniqueObjects.reduce(
      (acc,obj) => acc.concat({
      value: obj.Add.slice(6, 9),
      label: obj.Add.slice(6, 9),
    }),[]);
    //用 reduce 函數將這些轉換後的選項合併到現有的 options
    const newOptions = updatedOptions.reduce(
      (acc, option) => acc.concat(option),
      options
    );
    setDisSelect(newOptions);
    console.log("options,", newOptions);
  }, [data]);

  //切換地區
  const SwitchDistrict = (dis) => {
    setDistrict(data.filter((filter) => filter.Add.slice(6, 9) === dis));
  };
  return (
    <header style={{ backgroundImage: `url(./images/the-urban.png)` }}>
      <h1>高雄旅遊資訊</h1>
      <div className="select">
        <Select
          options={disSelect}
          defaultValue={options[0]}
          onChange={(item) => SwitchDistrict(item.value)}
        />
      </div>
      <div className="popular">
        <p>熱門行政區</p>
        <div className="popular_option">
          <button
            style={{ backgroundColor: "#8A82CC" }}
            onClick={() => SwitchDistrict("苓雅區")}
          >
            苓雅區
          </button>
          <button
            style={{ backgroundColor: "#FFA782" }}
            onClick={() => SwitchDistrict("三民區")}
          >
            三民區
          </button>
          <button
            style={{ backgroundColor: "#F5D005" }}
            onClick={() => SwitchDistrict("新興區")}
          >
            新興區
          </button>
          <button
            style={{ backgroundColor: "#559AC8" }}
            onClick={() => SwitchDistrict("鹽埕區")}
          >
            鹽埕區
          </button>
        </div>
        <div id="distop" className="line">
          <div className="icon">
            <div className="icon_contain">
              <div className="triangle"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
