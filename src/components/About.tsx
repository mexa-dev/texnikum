import { featuress, stats } from "../data/data";
import Layout from "./Layout";
import { useLang } from "../hooks/changeLang";
import Footer from "./Footer";

const About = () => {
  const { t } = useLang();

  return (
    <div>
      <h1 className="text-center text-5xl font-medium mt-[140px]">
        {t("navbar.about")}
      </h1>
      {featuress.map((v, i) => (
        <Layout key={i}>
          <p className="text-2xl sm:text-3xl md:text-4xl text-[#004790] w-full md:w-[999px] mt-[60px] md:mt-[100px] font-semibold text-center md:text-left px-4">
            {t(v.description)}
          </p>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-[40px] md:mt-[80px] gap-10 md:gap-0 px-4">
            <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 text-center md:text-left">
              <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">
                {t(v.title)}
              </h1>
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-10">
                <p className="text-lg sm:text-2xl md:text-3xl">{t(v.f1)}</p>
                <p className="text-lg sm:text-2xl md:text-3xl">{t(v.f2)}</p>
                <p className="text-lg sm:text-2xl md:text-3xl">{t(v.f3)}</p>
              </div>
            </div>
            <img
              src="/Rectangle_4028.png"
              className="w-full max-w-[550px] rounded-xl"
              alt=""
            />
          </div>
        </Layout>
      ))}

      {/* Stats */}
      <div className="px-6 md:px-[150px] py-10 bg-[#01328E] mt-[50px] md:mt-[70px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((a, i) => (
            <>
              <div key={i} className="flex flex-col gap-2 sm:gap-5 text-white">
                <p className="text-4xl sm:text-6xl md:text-8xl font-bold">
                  1000
                </p>
                <p className="text-lg sm:text-2xl md:text-4xl">
                  {t(a.students)}
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-5 text-white">
                <p className="text-4xl sm:text-6xl md:text-8xl font-bold">15</p>
                <p className="text-lg sm:text-2xl md:text-4xl">
                  {t(a.professions)}
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-5 text-white">
                <p className="text-4xl sm:text-6xl md:text-8xl font-bold">5</p>
                <p className="text-lg sm:text-2xl md:text-4xl">{t(a.cars)}</p>
              </div>
              <div className="flex flex-col gap-2 sm:gap-5 text-white">
                <p className="text-4xl sm:text-6xl md:text-8xl font-bold">50</p>
                <p className="text-lg sm:text-2xl md:text-4xl">
                  {t(a.teachers)}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
