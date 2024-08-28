import logo from "../../assets/images/vortexLogo.png";
import message from "../../assets/icons/ovalMessage.png";
import facebook from "../../assets/icons/ovalFacebook.png";
import instagram from "../../assets/icons/ovalInsta.png";

const Footer = ({ data }) => {

    var icons = [
        { "img": message, "url": "mailto:office@vortex-mk.com" },
        { "img": facebook, "url": "https://www.facebook.com/profile.php?id=100090554024215" },
        { "img": instagram, "url": "https://www.instagram.com/vortex_mk/" },
    ];

    // U ovoj liniji proveravamo da li je poslednji element u nizu (i+1), ako jeste onda dodajemo className hidden
    //<div className={`dot ${data.footer.list.length === i + 1 ? 'hidden' : ''}`}></div>

    return (
        <div className="footer-container">
            <div className="links-container">
                {
                    data.footer.list.map((e, i) => {
                        return (
                            <div className="row">
                                <p>{e}</p>
                                <div className={`dot ${data.footer.list.length === i + 1 ? 'hidden' : ''}`}></div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="bottom-bar">
                <div className="logo-container">
                    <img src={logo} alt="Vortex logo" />
                </div>
                <div className="text-container">
                    <p className="text">{data.footer.text}</p>
                </div>
                <div className="network-container">
                    {
                        icons.map((e) => {
                            return (
                                <a href={e.url}>
                                    <img src={e.img} alt={e.img.toString} />
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default Footer;