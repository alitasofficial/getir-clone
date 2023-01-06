import { appImages } from "../../assets/images/appImages";
import FooterCol from "./FooterCol";
import FooterList from "./FooterList";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <div>
      <div className="wrapper">
        <footer className="mt-10 flex gap-6 pb-5">
          <FooterCol name="Download Getir!">
            <ul className="flex flex-col gap-3">
              {appImages.map(({ url }) => (
                <li>
                  <img src={url} alt="" />
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol name="Discover Getir">
            <FooterList
              listArray={[
                "About us",
                "Careers",
                "Technology Careers",
                "Contact us",
                "Social Responsibility Projects",
              ]}
            />
          </FooterCol>

          <FooterCol name="Need Help?">
            <FooterList
              listArray={[
                "FAQ",
                "Protection of Personal Data",
                "Privacy Policy",
                "Terms & Conditions",
                "Cookie Policy",
              ]}
            />
          </FooterCol>

          <FooterCol name="Become Our Business Partner">
            <FooterList
              listArray={[
                "Become a Franchisee",
                "Rent Your Warehouse",
                "Become a GetirFood Restaurant",
                "Become a GetirLocals Business",
                "Chain Restaurants",
              ]}
            />
          </FooterCol>

          <div className="h-fit rounded-lg p-4 shadow-md">
            <a href="#">
              <img
                src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                alt=""
                width={72}
                height={84}
              />
            </a>
          </div>
        </footer>
        <div>
          <div className="flex items-center justify-between border-t py-6 text-[13px] text-color-getir-gray">
            <div>
              <span>© 2023 Getir</span>
              <span className="text-color-getir-navbar">
                ・ Information Society Services
              </span>
            </div>
            <div>
              <ul className="flex items-center gap-4 text-color-getir-gray-storm">
                <li>
                  <BsFacebook size={20} />
                </li>
                <li>
                  <BsTwitter size={20} />
                </li>
                <li>
                  <BsInstagram size={20} />
                </li>
                <li>
                  <div className="flex transform rounded-md border border-color-getir-primary-light py-1 px-2.5 transition-colors duration-500 hover:bg-color-getir-purple-light hover:text-color-getir-navbar">
                    <button className="flex items-center gap-1">
                      <TfiWorld size={16} />
                      English (EN)
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
