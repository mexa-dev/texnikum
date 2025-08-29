import { stats } from "../data/data";
import CourseCards from "./CourseCards";
import { useLang } from "../hooks/changeLang";
import Layout from "./Layout";
import Footer from "./Footer";

const Courses = () => {
  const { t } = useLang();

  return (
    <>
      <Layout>
        <div className="mt-[140px] mb-[100px]">
          {stats.map((a) => (
            <p className="font-semibold text-center text-6xl mb-[50px]">
              {t(a.title)}
            </p>
          ))}
          <CourseCards />
          <br />
          <CourseCards />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Courses;
