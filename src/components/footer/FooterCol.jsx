const FooterCol = ({ name, children }) => {
  return (
    <div className="flex-1">
      <h4 className="mb-4 text-lg leading-6 text-color-getir-navbar">{name}</h4>
      {children}
    </div>
  );
};

export default FooterCol;
