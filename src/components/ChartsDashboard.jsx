import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

function ChartsDashboard(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Number',
        data: labels.map(() => Math.random()),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div className="ms-card ms-widget ms-infographics-widget">
      <div className="ms-card-body media">
        <div className="media-body">
          <h6 className="bold">{props.name}</h6>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>

  )
}

export default ChartsDashboard