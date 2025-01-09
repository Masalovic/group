const LogoList = ({ logos }) => {
  return (
    <div className="logo-list">
      {logos.map((e) => {
        return (
          <div className="logo-wrapper" key={e}>
            <img src={e} alt="Client Logo" />
          </div>
        );
      })}
    </div>
  );
};
export default LogoList;
