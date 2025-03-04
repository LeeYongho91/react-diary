import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivoitDate, data) => {
  const beginTime = new Date(
    pivoitDate.getFullYear(),
    pivoitDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  const endTime = new Date(
    pivoitDate.getFullYear(),
    pivoitDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();

  return data.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime,
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivoitDate, setPivotDate] = useState(new Date());
  console.log(`data`, data);
  const monthlyData = getMonthlyData(pivoitDate, data);
  console.log(monthlyData);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivoitDate.setMonth(pivoitDate.getMonth() + 1)));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivoitDate.setMonth(pivoitDate.getMonth() - 1)));
  };

  return (
    <div>
      <Header
        title={`${pivoitDate.getFullYear()}년 ${pivoitDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
