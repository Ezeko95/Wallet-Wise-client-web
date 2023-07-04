import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chartjs-adapter-moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/index";
import { RootState } from "../../redux/store/index";
import {
  Chart,
  LinearScale,
  CategoryScale,
  PieController,
  ArcElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PieController, ArcElement);
const PieChar: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const dates = users.map((user) => user.createdAt.split("T")[0]);
  const uniqueDates = [...new Set(dates)];
  const usersCount = uniqueDates.map(
    (date) => dates.filter((d) => d === date).length
  );
  const labels = uniqueDates;

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total users created",
        data: usersCount,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div style={{height:"400px", width:"700px"}}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChar;
