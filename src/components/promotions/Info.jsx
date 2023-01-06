import InfoCard from "./InfoCard";
import { infoCardData } from "./infoCardData";

const Info = () => {
  return (
    <div className="mt-9 flex gap-4">
      {infoCardData.map((data, idx) => (
        <InfoCard key={idx} data={data} />
      ))}
    </div>
  );
};

export default Info;
