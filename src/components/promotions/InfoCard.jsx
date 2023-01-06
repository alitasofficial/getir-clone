const InfoCard = ({ data }) => {
  const { img, title, text } = data;
  return (
    <div className="flex flex-col items-center rounded-xl bg-color-getir-white px-4 pt-[3.75rem] pb-10">
      <img src={img} alt="" width={150} height={150} />
      <h4 className="mt-6 font-semibold text-color-getir-navbar">{title}</h4>
      <span className="mt-2 text-center text-color-getir-gray-storm">
        {text}
      </span>
    </div>
  );
};

export default InfoCard;
