import { Line } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
const Graphpage = () => {
  const labels = ["12AM", "4AM", "8AM", "12PM", "4PM", "8PM", "12PM"];
  const options = {
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Tracker"
      }
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: "1",
        data: [20000, 40000, 35000, 80000, 60000, 70000, 80000],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "2",
        data: [50000, 30000, 60000, 70000, 80000, 50000, 40000],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  };

  return (
    <div className='h-96 w-full'>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graphpage;
