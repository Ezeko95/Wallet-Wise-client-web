import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/index";
import { RootState } from "../../redux/store/index";
import {
  Chart,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarController, BarElement);
const BarChar: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const labels = users.map((user) => user.name);
  const balanceTotals = users.map((user) => user.balance.total);

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Balance Total",
        data: balanceTotals,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChar;
