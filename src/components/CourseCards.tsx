import React from "react";
import { courseCards } from "../data/data";
import { useLang } from "../hooks/changeLang";
import { Link } from "react-router-dom";

const CourseCards = () => {
  const { t } = useLang();

  return (
    <Link to={"#"} className="flex justify-between mt-10">
      {courseCards.map((a) => (
        <div className="shadow-2xl rounded-b-2xl">
          <img src={a.img} className="w-[350px]" alt="" />
          <div className="px-[15px] h-[180px]">
            <p className="text-2xl mt-2 text-[#0E026D] font-semibold">
              {t(a.title)}
            </p>
            <p className="w-[320px] mt-[20px]">{t(a.descrepion)}</p>
            <svg
              className="mt-10"
              width="94"
              height="14"
              viewBox="0 0 94 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.45755 0L9.13187 4.83688H14.5501L10.1667 7.82624L11.841 12.6631L7.45755 9.67376L3.07411 12.6631L4.74844 7.82624L0.364998 4.83688H5.78323L7.45755 0Z"
                fill="#D9D9D9"
              />
              <path
                d="M7.45755 0L9.13187 4.83688H14.5501L10.1667 7.82624L11.841 12.6631L7.45755 9.67376L3.07411 12.6631L4.74844 7.82624L0.364998 4.83688H5.78323L7.45755 0Z"
                fill="#FFDF0D"
              />
              <path
                d="M27.2271 0L28.9014 4.83688H34.3196L29.9362 7.82624L31.6105 12.6631L27.2271 9.67376L22.8436 12.6631L24.518 7.82624L20.1345 4.83688H25.5528L27.2271 0Z"
                fill="#D9D9D9"
              />
              <path
                d="M27.2271 0L28.9014 4.83688H34.3196L29.9362 7.82624L31.6105 12.6631L27.2271 9.67376L22.8436 12.6631L24.518 7.82624L20.1345 4.83688H25.5528L27.2271 0Z"
                fill="#FFDF0C"
              />
              <path
                d="M47.0005 0L48.6748 4.83688H54.0931L49.7096 7.82624L51.384 12.6631L47.0005 9.67376L42.6171 12.6631L44.2914 7.82624L39.908 4.83688H45.3262L47.0005 0Z"
                fill="#D9D9D9"
              />
              <path
                d="M47.0005 0L48.6748 4.83688H54.0931L49.7096 7.82624L51.384 12.6631L47.0005 9.67376L42.6171 12.6631L44.2914 7.82624L39.908 4.83688H45.3262L47.0005 0Z"
                fill="#FFDF0C"
              />
              <path
                d="M66.77 0L68.4444 4.83688H73.8626L69.4792 7.82624L71.1535 12.6631L66.77 9.67376L62.3866 12.6631L64.0609 7.82624L59.6775 4.83688H65.0957L66.77 0Z"
                fill="#D9D9D9"
              />
              <path
                d="M66.77 0L68.4444 4.83688H73.8626L69.4792 7.82624L71.1535 12.6631L66.77 9.67376L62.3866 12.6631L64.0609 7.82624L59.6775 4.83688H65.0957L66.77 0Z"
                fill="#FFDF0C"
              />
              <path
                d="M86.5435 0L88.2178 4.83688H93.636L89.2526 7.82624L90.9269 12.6631L86.5435 9.67376L82.16 12.6631L83.8344 7.82624L79.4509 4.83688H84.8692L86.5435 0Z"
                fill="#D9D9D9"
              />
              <path
                d="M86.5435 0L88.2178 4.83688H93.636L89.2526 7.82624L90.9269 12.6631L86.5435 9.67376L82.16 12.6631L83.8344 7.82624L79.4509 4.83688H84.8692L86.5435 0Z"
                fill="url(#paint0_linear_575_321)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_575_321"
                  x1="81.514"
                  y1="4"
                  x2="94.0045"
                  y2="4.66191"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.317308" stop-color="#FFDF0C" />
                  <stop offset="0.456731" stop-color="#D9D9D9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      ))}
    </Link>
  );
};

export default CourseCards;
