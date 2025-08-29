import React from "react";
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
          <p className="text-4xl text-[#004790] w-[999px] mt-[50px] font-semibold">
            {t(v.description)}
          </p>
          <div className="flex justify-between mt-[80px] mb-[100px]">
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
              <p className="text-8xl">1000+</p>
              <p className="text-4xl">{t(a.students)}</p>
            </div>
            <div className="flex flex-col gap-5 text-white">
              <p className="text-8xl">15+</p>
              <p className="text-4xl">{t(a.professions)}</p>
            </div>
            <div className="flex flex-col gap-5 text-white">
              <p className="text-8xl">5+</p>
              <p className="text-4xl">{t(a.cars)}</p>
            </div>
            <div className="flex flex-col gap-5 text-white">
              <p className="text-8xl">50+</p>
              <p className="text-4xl">{t(a.teachers)}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
