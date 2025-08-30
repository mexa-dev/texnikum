import { Mail, MapPin, Phone } from "lucide-react";
import { contactData } from "../data/data";
import { useLang } from "../hooks/changeLang";
import Layout from "./Layout";
import Footer from "./Footer";

const Contact = () => {
  const { t } = useLang();

  return (
    <div className="mt-[120px] sm:mt-[140px] md:mt-[180px]">
      {contactData.map((e, i) => (
        <Layout key={i}>
          {/* Title */}
          <p className="text-center text-3xl sm:text-4xl md:text-5xl font-medium">
            {t(e.title)}
          </p>

          {/* Contact info + form */}
          <div className="flex flex-col lg:flex-row mt-10 md:mt-20 gap-10 lg:gap-20 justify-between">
            {/* Contact info */}
            <div className="flex flex-col gap-6 sm:gap-10 w-full lg:w-1/2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#63ADFF] text-white flex justify-center items-center rounded-full">
                  <MapPin size={24} className="sm:size-8 md:size-10" />
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl text-[#0E026D]">
                  {t(e.addressa)}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#63ADFF] text-white flex justify-center items-center rounded-full">
                  <Mail size={24} className="sm:size-8 md:size-10" />
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl text-[#0E026D]">
                  raqamlitexnikum1gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#63ADFF] text-white flex justify-center items-center rounded-full">
                  <Phone size={24} className="sm:size-8 md:size-10" />
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl text-[#0E026D]">
                  +99895 707 94 00
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-1/2">
              <input
                type="text"
                className="w-full bg-[#F8F9FD] px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg md:text-xl outline-none rounded-xl"
                placeholder={t(e.name)}
              />
              <input
                type="email"
                className="w-full bg-[#F8F9FD] px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg md:text-xl outline-none rounded-xl"
                placeholder={t(e.email)}
              />
              <textarea
                placeholder={t(e.message)}
                className="w-full h-28 sm:h-36 md:h-44 bg-[#F8F9FD] px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg md:text-xl outline-none rounded-xl resize-none"
              />
            </div>
          </div>

          {/* Address + Map */}
          <div className="flex flex-col lg:flex-row items-center  justify-between gap-8 mt-16 md:mt-20 mb-28 md:mb-44">
            <p className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center lg:text-left">
              {t(e.address)}
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436.8917744926579!2d67.12634548521314!3d37.49837550752169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f35454afdace0c5%3A0xe13638e07793d2c0!2sSurxondaryo%20axborot%20texnologiyalari%20texnikumi!5e1"
              width="100%"
              height="300"
              className="rounded-xl lg:w-[600px] lg:h-[400px]"
              loading="lazy"
            ></iframe>
          </div>
        </Layout>
      ))}
      <Footer />
    </div>
  );
};

export default Contact;
