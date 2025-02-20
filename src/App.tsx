import { useState, useEffect } from 'react';
import ColumnChart from './components/ColumnChart';
import batteryData from './data.json';
import IBatteryData from './models/IBatteryData';

const App = () => {
  const [data, setData] = useState<IBatteryData[]>([]);

  useEffect(() => {
    //format the date to be in the format of "2024-09-02 07:00:12"
    const formattedData = batteryData.chargingStates.map(
      (item: IBatteryData) => ({
        ...item,
        date: formatDateTime(item.date),
      })
    );

    setData(formattedData);
  }, []);

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="md:text-4xl text-2xl font-bold text-center text-[#1971c2]">
        Battery Charge Status
      </h1>
      <ColumnChart data={data} />
    </div>
  );
};

export default App;
