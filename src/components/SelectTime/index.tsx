import IBatteryData from '../../models/IBatteryData';
import { useState } from 'react';
import overcharged from '../../assets/images/battery/overcharged.png';
import full from '../../assets/images/battery/full.png';
import high from '../../assets/images/battery/high.png';
import medium from '../../assets/images/battery/medium.png';
import low from '../../assets/images/battery/low.png';

const SelectTime = ({ data }: { data: IBatteryData[] }) => {
  const [selectedTime, setSelectedTime] = useState<IBatteryData | null>(null);

  const selectTimeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const item = data.find(
      (item) => item.internalEventId === parseInt(e.target.value)
    );
    if (item) setSelectedTime(item);
  };

  const batteryLevelStyle = (level: number) => {
    if (level < 20) return 'text-[#E72315]';
    if (level < 50) return 'text-[#FBAA12]';
    if (level < 65) return 'text-[#FFE103]';
    return 'text-[#24A01E]';
  };

  return (
    <div>
      <select
        className="border border-gray-300 rounded-md p-2"
        onChange={selectTimeHandler}
      >
        <option value="">Select Time</option>
        {data.map((item) => (
          <option key={item.internalEventId} value={item.internalEventId}>
            {item.date}
          </option>
        ))}
      </select>
      {selectedTime && (
        <div className="mt-4 flex md:flex-row flex-col  items-center gap-4  mt-10">
          <div>
            <img
              src={
                selectedTime.chargingLevel >= 100
                  ? overcharged
                  : selectedTime.chargingLevel >= 66
                  ? full
                  : selectedTime.chargingLevel >= 49
                  ? high
                  : selectedTime.chargingLevel >= 19
                  ? medium
                  : low
              }
              alt="battery"
              className="md:w-14 w-10"
            />
          </div>
          <div>
            <h3 className="text-md text-gray-500">
              Time: <span className="font-semibold">{selectedTime.date}</span>
            </h3>
            <h3 className="text-md text-gray-500">
              Charging Level:{' '}
              <span
                className={`font-semibold ${batteryLevelStyle(
                  selectedTime.chargingLevel
                )}`}
              >
                {selectedTime.chargingLevel}%
              </span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectTime;
