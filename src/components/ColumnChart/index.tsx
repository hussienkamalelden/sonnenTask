import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import IBatteryData from '../../models/IBatteryData';
const ColumnChart = ({ data }: { data: IBatteryData[] }) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        colors: {
          ranges: [
            {
              from: 0,
              to: 20,
              color: '#E72315',
            },
            {
              from: 21,
              to: 50,
              color: '#FBAA12',
            },
            {
              from: 51,
              to: 65,
              color: '#FFE103',
            },
            {
              from: 66,
              to: 100,
              color: '#24A01E',
            },
          ],
        },
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
    <ReactApexChart
      options={chartOptions}
      series={series}
      type="bar"
      height={350}
    />
  );
};

export default ColumnChart;
