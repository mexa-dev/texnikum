import { footerData } from "../data/data";
import { useLang } from "../hooks/changeLang";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  const { t } = useLang();

  return (
    <>
      <footer className="bg-[#0E026D] px-6 md:px-16 lg:px-[150px] py-10 text-white">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          {footerData.map((a, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row gap-10 lg:justify-between w-full"
            >
              {/* Chap taraf - Digital College */}
              <div className="flex items-center justify-center lg:justify-start">
                <p className="text-3xl md:text-4xl lg:text-[48px] w-[100px] font-bold leading-tight text-center lg:text-left">
                  {t(a.digitalCollege)}
                </p>
              </div>

              {/* Manzil va telefon */}
              <div className="flex flex-col gap-6">
                <p className="text-2xl md:text-3xl font-semibold text-center lg:text-left">
                  {t(a.title)}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <MapPin size={24} />
                  <p className="text-lg md:text-xl">{t(a.address)}</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <Phone size={24} />
                  <p className="text-lg md:text-xl">+998 95 707 94 00</p>
                </div>
              </div>

              {/* Qo‘shimcha kontaktlar */}
              <div className="flex flex-col gap-6">
                <p className="text-2xl md:text-3xl font-semibold text-center lg:text-left">
                  {t(a.contact)}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <Phone size={24} />
                    <p className="text-lg md:text-xl">+998 (94) 060-93-00</p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <Phone size={24} />
                    <p className="text-lg md:text-xl">+998 (94) 032-33-00</p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <Phone size={24} />
                    <p className="text-lg md:text-xl">+998 (94) 043-73-00</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </footer>
      <div className="flex justify-center items-center bg-[#0E026D] text-white px-4 py-3">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center">
          {t("comp.madeBy")}
        </p>
      </div>
    </>
  );
};

export default Footer;
