import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const App = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [44, 55, 57, 56, 61, 58],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">Hello World</h1>
      <div className="mt-8">
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default App;
