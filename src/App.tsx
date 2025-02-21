import { useState, useEffect } from 'react';
import ColumnChart from './components/ColumnChart';
import batteryData from './data.json';
import IBatteryData from './models/IBatteryData';
import SectionWrapper from './components/common/SectionWrapper';
import SelectTime from './components/SelectTime';

const App = () => {
  const [data, setData] = useState<IBatteryData[]>([]);

  useEffect(() => {
    //format the dates
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
      {/* Battery History Chart Section*/}
      <SectionWrapper
        title="Battery History Chart"
        brief="The chart below shows the battery's history over the last 24 hours."
      >
        <ColumnChart data={data} />
      </SectionWrapper>

      {/* Select Time Section*/}
      <SectionWrapper
        title="Select Time"
        brief="Select a specific time to see the battery's charging level at that time."
      >
        <SelectTime data={data} />
      </SectionWrapper>
    </div>
  );
};

export default App;
