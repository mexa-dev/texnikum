import { Mail, MapPin, Phone } from "lucide-react";
import { contactData } from "../data/data";
import { useLang } from "../hooks/changeLang";
import Layout from "./Layout";
import Footer from "./Footer";

const Contact = () => {
  const { t } = useLang();

  return (
    <div className="mt-[180px]">
      {contactData.map((e) => (
        <Layout>
          <p className="text-center text-5xl font-medium">{t(e.title)}</p>

          <div className="flex mt-[80px] justify-between">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="w-[100px] h-[100px] bg-[#63ADFF] text-white flex justify-center items-center  rounded-full text-center">
                  <MapPin size={30} />
                </div>
                <p className="text-4xl text-[#0E026D]">{t(e.addressa)}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[100px] h-[100px] bg-[#63ADFF] text-white flex justify-center items-center  rounded-full text-center">
                  <Mail size={30} />
                </div>
                <p className="text-4xl text-[#0E026D]">
                  raqamlitexnikum1gmail.com
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[100px] h-[100px] bg-[#63ADFF] text-white flex justify-center items-center  rounded-full text-center">
                  <Phone size={30} />
                </div>
                <p className="text-4xl text-[#0E026D]">+99895 707 94 00</p>
              </div>
            </div>
            <div className=" flex flex-col gap-10">
              <input
                type="text"
                className="w-[600px] bg-[#F8F9FD] px-[20px] py-[10px] text-[24px] outline-none rounded-xl"
                placeholder={t(e.name)}
              />
              <input
                type="email"
                className="w-[600px] bg-[#F8F9FD] px-[20px] py-[10px] text-[24px] outline-none rounded-xl"
                placeholder={t(e.email)}
              />
              <textarea
                placeholder={t(e.message)}
                className="w-full max-w-[600px] h-[100px] md:h-[180px] bg-[#F8F9FD] px-[20px] py-[10px] text-[18px] outline-none rounded-xl resize-none"
              />
            </div>
          </div>
          <div className=" flex items-center justify-between mt-[80px] mb-[200px]">
            <p className="text-5xl font-semibold px-[60px]">{t(e.address)}</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436.8917744926579!2d67.12634548521314!3d37.49837550752169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f35454afdace0c5%3A0xe13638e07793d2c0!2sSurxondaryo%20axborot%20texnologiyalari%20texnikumi!5e1"
              width="600"
              height="400"
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
