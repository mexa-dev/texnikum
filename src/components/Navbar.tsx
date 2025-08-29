import { useState } from "react";
import { Link } from "react-router-dom";
import navData from "../data/data";
import { useLang } from "../hooks/changeLang";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, changeLang, i18n } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full shadow-2xl z-30 bg-white">
      <div className="bg-[#63ADFF] px-6 md:px-[90px] py-[15px] flex items-center justify-between relative">
        <Link to={"/"}>
          <img src="/logo.png" className="w-[70px] md:w-[80px]" alt="Logo" />
        </Link>
        <div className="flex gap-4">
          <div className="hidden md:flex gap-[30px] text-white text-lg md:text-2xl font-medium">
            {navData.map((a) => (
              <Link to={a.href} className="hover:text-[#040F6E]" key={a.id}>
                {t(a.key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <select
              onChange={(e) => changeLang(e.target.value)}
              className="outline-none text-[#040F6E] font-medium"
              value={i18n.language}
            >
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>

            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="absolute top-[70px] left-0 w-full bg-[#63ADFF] mt-[15px] flex flex-col items-center gap-6 py-6 md:hidden shadow-lg z-50">
            {navData.map((a) => (
              <Link
                to={a.href}
                className="text-white text-lg hover:text-[#040F6E]"
                key={a.id}
                onClick={() => setOpen(false)}
              >
                {t(a.key)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
