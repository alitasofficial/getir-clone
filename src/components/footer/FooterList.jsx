const FooterList = ({ listArray }) => {
  return (
    <ul className="flex flex-col gap-4 text-sm font-normal antialiased">
      {listArray.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default FooterList;
