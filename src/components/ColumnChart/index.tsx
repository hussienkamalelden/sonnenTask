import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import IBatteryData from '../../models/IBatteryData';

const ColumnChart = ({ data }: { data: IBatteryData[] }) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: data.map((item: IBatteryData) => item.date),
    },
  };

  const series: ApexAxisChartSeries = [
    {
      name: 'Charging Level',
      data: data.map((item: IBatteryData) => item.chargingLevel),
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Battery History Chart</h2>
      <span className="text-sm text-gray-500">
        The chart below shows the battery's charging history over the last 24
        hours.
      </span>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
