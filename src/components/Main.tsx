import { featuress, heroTitle, news, stats } from "../data/data";
import { useLang } from "../hooks/changeLang";
import Layout from "./Layout";
import CourseCards from "./CourseCards";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Main = () => {
  const { t } = useLang();

  return (
    <>
      {/* Hero Section */}
      {heroTitle.map((a) => (
        <section className="relative w-full h-[80vh] md:h-[120vh] flex items-center justify-center text-center text-white">
          <img
            src="/Rectangle_4025.png"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002454]/70 z-10"></div>
          <div className="relative z-10 flex flex-col gap-6 md:gap-14 items-center justify-center h-full text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl max-w-[700px]  text-center leading-snug font-semibold z-20">
              {t(a.title)}
            </h1>
            <p className="text-xl sm:text-3xl md:text-5xl font-semibold text-center">
              {t(a.subtitle)}
            </p>
            <Link
              to={"/contact"}
              className="bg-white px-6 sm:px-12 md:px-[70px] py-3 md:py-[15px] text-[#38BDF8] rounded-xl text-lg sm:text-2xl md:text-4xl cursor-pointer hover:bg-[#38BDF8] hover:text-white transition-colors duration-300 mt-6 md:mt-[30px]"
            >
              {t(a.startBtn)}
            </Link>
          </div>
        </section>
      ))}

      {/* Features */}
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

      {/* Courses */}
      <Layout>
        {stats.map((a) => (
          <p
            key={a.title}
            className="text-[#004790] font-semibold text-3xl sm:text-4xl md:text-6xl text-center md:text-left"
          >
            {t(a.title)}
          </p>
        ))}
        <CourseCards />
        {news.map((a, i) => (
          <div key={i} className="flex justify-center mt-[40px]">
            <Link
              to={"/courses"}
              className="text-xl sm:text-2xl md:text-4xl text-white bg-[#01328E] px-8 sm:px-12 md:px-[60px] py-3 sm:py-4 md:py-[20px] rounded-2xl"
            >
              {t(a.viewAll)}
            </Link>
          </div>
        ))}

        {/* News */}
        {news.map((a, i) => (
          <div key={i}>
            <p className="text-[#004790] font-semibold text-3xl sm:text-4xl md:text-6xl mt-[50px] md:mt-[80px] text-center md:text-left">
              {t(a.title)}
            </p>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-[30px] md:mt-[50px] items-center justify-center">
              <div className="w-full max-w-[400px] rounded-2xl shadow-2xl">
                <img
                  src="/Rectangle_4038.png"
                  className="w-full rounded-t-2xl"
                  alt=""
                />
                <div className="px-4 text-center py-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#004790]">
                    {t(a.youth)}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl mt-[10px]">
                    {t(a.patriotism)}
                  </p>
                </div>
              </div>
              <div className="w-full max-w-[400px] rounded-2xl shadow-2xl">
                <img
                  src="/Rectangle_4040.png"
                  className="w-full rounded-t-2xl"
                  alt=""
                />
                <div className="px-4 text-center py-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#004790]">
                    {t(a.parents)}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl mt-[10px]">
                    {t(a.meeting)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {news.map((a, i) => (
          <div
            key={i}
            className="flex justify-center mt-[30px] md:mt-[40px] mb-[80px] md:mb-[150px]"
          >
            <Link
              to={"/news"}
              className="text-xl sm:text-2xl md:text-4xl text-white bg-[#01328E] px-8 sm:px-12 md:px-[60px] py-3 sm:py-4 md:py-[20px] rounded-2xl"
            >
              {t(a.viewAll)}
            </Link>
          </div>
        ))}
      </Layout>
      <Footer />
    </>
  );
};

export default Main;
