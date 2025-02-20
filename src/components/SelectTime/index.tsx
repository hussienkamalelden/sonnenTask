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

  const batteryLevel = (level: number, type: string) => {
    if (level < 20) return type === 'style' ? 'text-[#E72315]' : low;
    if (level < 50) return type === 'style' ? 'text-[#FBAA12]' : medium;
    if (level < 65) return type === 'style' ? 'text-[#FFE103]' : high;
    return type === 'style' ? 'text-[#24A01E]' : full;
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
        <div className="mt-4 flex md:flex-row flex-col items-center gap-4  mt-10">
          <div>
            <img
              src={batteryLevel(selectedTime.chargingLevel, 'image')}
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
                className={`font-semibold ${batteryLevel(
                  selectedTime.chargingLevel,
                  'style'
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
