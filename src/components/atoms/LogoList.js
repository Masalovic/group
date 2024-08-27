const LogoList = ({ logos }) => {
    return (
        <div className="logo-list">
            {logos.map((e) => {
                return (
                    <div className='logo-wrapper'>
                        <img src={e} alt={e} />
                    </div>
                );
            })}
        </div>
    );
}
export default LogoList;