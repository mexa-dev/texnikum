import { courseCards } from "../data/data";
import { useLang } from "../hooks/changeLang";
import { Link } from "react-router-dom";

const CourseCards = () => {
  const { t } = useLang();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
      {courseCards.map((a, i) => (
        <Link
          to={"#"}
          key={i}
          className="shadow-2xl rounded-b-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
        >
          {/* Rasm */}
          <img src={a.img} className="w-full max-w-[350px] mx-auto" alt="" />

          {/* Kontent */}
          <div className="px-4 sm:px-5 py-4 h-auto">
            <p className="text-xl sm:text-2xl mt-2 text-[#0E026D] font-semibold">
              {t(a.title)}
            </p>
            <p className="text-sm sm:text-base md:text-lg mt-3 text-gray-700">
              {t(a.descrepion)}
            </p>

            {/* Yulduzchalar */}
            <div className="mt-4 flex justify-start">
              <svg
                width="94"
                height="14"
                viewBox="0 0 94 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* yulduzlar */}
                <path
                  d="M7.4 0L9.1 4.8H14.5L10.1 7.8L11.8 12.6L7.4 9.6L3 12.6L4.7 7.8L0.3 4.8H5.7L7.4 0Z"
                  fill="#FFDF0D"
                />
                <path
                  d="M27.2 0L28.9 4.8H34.3L29.9 7.8L31.6 12.6L27.2 9.6L22.8 12.6L24.5 7.8L20.1 4.8H25.5L27.2 0Z"
                  fill="#FFDF0D"
                />
                <path
                  d="M47 0L48.6 4.8H54.0L49.7 7.8L51.3 12.6L47 9.6L42.6 12.6L44.2 7.8L39.9 4.8H45.3L47 0Z"
                  fill="#FFDF0D"
                />
                <path
                  d="M66.7 0L68.4 4.8H73.8L69.4 7.8L71.1 12.6L66.7 9.6L62.3 12.6L64 7.8L59.6 4.8H65L66.7 0Z"
                  fill="#FFDF0D"
                />
                <path
                  d="M86.5 0L88.2 4.8H93.6L89.2 7.8L90.9 12.6L86.5 9.6L82.1 12.6L83.8 7.8L79.4 4.8H84.8L86.5 0Z"
                  fill="url(#gradStar)"
                />
                <defs>
                  <linearGradient
                    id="gradStar"
                    x1="81.5"
                    y1="4"
                    x2="94"
                    y2="4.6"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.3" stopColor="#FFDF0D" />
                    <stop offset="0.45" stopColor="#D9D9D9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseCards;
