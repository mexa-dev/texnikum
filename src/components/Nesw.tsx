import React from "react";
import { news } from "../data/data";
import { useLang } from "../hooks/changeLang";
import Layout from "./Layout";
import Footer from "./Footer";

const Nesw = () => {
  const { t } = useLang();

  return (
    <div>
      <Layout>
        {news.map((a) => (
          <>
            <p className="font-semibold text-6xl text-center mt-[140px]">
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
      </Layout>
      <Footer />
    </div>
  );
};

export default Nesw;
