import { news } from "../data/data";
import { useLang } from "../hooks/changeLang";
import Layout from "./Layout";
import Footer from "./Footer";

const Nesw = () => {
  const { t } = useLang();

  return (
    <div>
      <Layout>
        {news.map((a, i) => (
          <div key={i}>
            <p className="font-semibold text-3xl sm:text-4xl mt-[140px] md:text-6xl  md:mt-[140px]  text-center ">
              {t(a.title)}
            </p>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-[30px] md:mt-[50px] items-center justify-center mb-[50px]">
              <div className="w-full max-w-[400px] rounded-2xl shadow-2xl h-[400px]">
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
              <div className="w-full max-w-[400px] rounded-2xl shadow-2xl h-[400px]">
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
      </Layout>
      <Footer />
    </div>
  );
};

export default Nesw;
