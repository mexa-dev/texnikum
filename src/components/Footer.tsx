import { footerData } from "../data/data";
import { useLang } from "../hooks/changeLang";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  const { t } = useLang();

  return (
    <div className="bg-[#0E026D] px-[150px] py-[50px] flex justify-between text-white ">
      {footerData.map((a) => (
        <>
          <div className="w-[80px] flex items-center">
            <p className="text-[48px] text-white text-center leading-18">
              {t(a.digitalCollege)}
            </p>
          </div>
          <div className="flex flex-col gap-16">
            <p className="text-[40px] font-medium text-center">{t(a.title)}</p>
            <div className="flex items-center gap-5">
              <MapPin /> <p className="text-2xl">{t(a.address)}</p>
            </div>
            <div className="flex items-center gap-5">
              <Phone /> <p className="text-2xl">+99895 707 94 00</p>
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <p className="text-[40px] font-medium text-center">
              {t(a.contact)}
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <Phone /> <p className="text-2xl">+998 (94)-060-93 00</p>
              </div>
              <div className="flex items-center gap-5">
                <Phone /> <p className="text-2xl">+998 (94)-032-33 00</p>
              </div>
              <div className="flex items-center gap-5">
                <Phone /> <p className="text-2xl"> +998 (94)-043-73 00</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Footer;
