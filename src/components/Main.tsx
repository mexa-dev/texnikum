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
      {heroTitle.map((a, i) => (
        <section
          key={i}
          className="relative h-[800px] mt-[100px] bg-[url('/Rectangle_4025.png')] bg-blue-400 bg-[length:120%] bg-center bg-no-repeat"
        >
          <div className="absolute inset-0 bg-[#002454]/70 z-10"></div>
          <div className="relative z-10 flex flex-col gap-14 items-center justify-center h-full text-white">
            <h1 className="text-6xl w-[503px] text-center leading-[72px] font-semibold z-20">
              {t(a.title)}
            </h1>
            <p className="text-5xl font-semibold">{t(a.subtitle)}</p>
            <button className="bg-white px-[70px] py-[15px] text-[#38BDF8] rounded-xl text-4xl cursor-pointer hover:bg-[#38BDF8] hover:text-white transition-colors duration-300 mt-[30px]">
              {t(a.startBtn)}
            </button>
          </div>
          <div className="h-[50px]" />
        </section>
      ))}
      {featuress.map((v, i) => (
        <Layout key={i}>
          <p className="text-4xl text-[#004790] w-[999px] mt-[100px] font-semibold">
            {t(v.description)}
          </p>
          <div className="flex justify-between mt-[80px]">
            <div className="flex flex-col gap-16 ">
              <h1 className="font-medium text-4xl">{t(v.title)}</h1>
              <div className="flex flex-col gap-10">
                <p className="text-3xl">{t(v.f1)}</p>
                <p className="text-3xl">{t(v.f2)}</p>
                <p className="text-3xl">{t(v.f3)}</p>
              </div>
            </div>
            <img src="/Rectangle_4028.png" className="w-[550px]" alt="" />
          </div>
        </Layout>
      ))}
      <div className="px-[150px] py-[20px] bg-[#01328E] mt-[70px]">
        {stats.map((a) => (
          <div className="flex justify-between text-center">
            <div className="flex flex-col gap-5 text-white">
              <p className="text-8xl">1000</p>
              <p className="text-4xl">{t(a.students)}</p>
            </div>
            <div className="flex flex-col gap-5 text-white">
              <p className="text-8xl">15</p>
              <p className="text-4xl">{t(a.professions)}</p>
            </div>
            <div className="flex flex-col gap-5 text-white">
              <p className="text-8xl">5</p>
              <p className="text-4xl">{t(a.cars)}</p>
            </div>
            <div className="flex flex-col gap-5 text-white">
              <p className="text-8xl">50</p>
              <p className="text-4xl">{t(a.teachers)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[100px]" />
      <Layout>
        {stats.map((a) => (
          <p className="text-[#004790] font-semibold text-6xl">{t(a.title)}</p>
        ))}
        <CourseCards />
        {news.map((a) => (
          <div className="flex justify-center mt-[40px]">
            <Link
              to={"/courses"}
              className="text-4xl text-white bg-[#01328E]  px-[60px] py-[20px] rounded-2xl"
            >
              {t(a.viewAll)}
            </Link>
          </div>
        ))}

        {news.map((a) => (
          <>
            <p className="text-[#004790] font-semibold text-6xl mt-[80px]">
              {t(a.title)}
            </p>
            <div className="flex gap-10 mt-[50px]">
              <div className="w-[400px] rounded-2xl shadow-2xl h-[380px]">
                <img src="/Rectangle_4038.png" className="w-[400px]" alt="" />

                <div className="px-[10px] text-center">
                  <h1 className="text-4xl font-semibold text-[#004790] mt-[10px]">
                    {t(a.youth)}
                  </h1>
                  <p className="text-xl mt-[15px] ">{t(a.patriotism)}</p>
                </div>
              </div>
              <div className="w-[400px] rounded-2xl shadow-2xl h-[380px]">
                <img src="/Rectangle_4040.png" className="w-[400px]" alt="" />

                <div className="px-[10px] text-center">
                  <h1 className="text-4xl font-semibold text-[#004790] mt-[10px]">
                    {t(a.parents)}
                  </h1>
                  <p className="text-xl mt-[15px] ">{t(a.meeting)}</p>
                </div>
              </div>
            </div>
          </>
        ))}
        {news.map((a) => (
          <div className="flex justify-center mt-[40px] mb-[150px]">
            <Link
              to={"/news"}
              className="text-4xl text-white bg-[#01328E]  px-[60px] py-[20px] rounded-2xl"
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
