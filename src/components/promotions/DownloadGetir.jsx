import Doodle from "../../assets/images/doodle.png";
import { appImages } from "../../assets/images/appImages";

const DownloadGetir = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Doodle})` }}
      className="my-6 flex h-80 items-end rounded-md bg-color-getir-navbar"
    >
      <div className="ml-12 flex h-full flex-col justify-center text-color-getir-white">
        {/* Left Content */}
        <h3 className="text-2xl font-bold">Download Getir!</h3>
        <span className="mt-6 max-w-[22.5rem] leading-6">
          Let us deliver your order to your door in minutes.
        </span>
        <div className="pt-8">
          <ul className="flex gap-2">
            {appImages.map(({ url }) => (
              <li>
                <img src={url} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLandingEn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DownloadGetir;
