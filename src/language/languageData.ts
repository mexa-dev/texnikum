import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        navbar: {
          home: "Bosh sahifa",
          about: "Biz haqimizda",
          courses: "Kurslar",
          news: "Yangiliklar",
          contact: "Bog’lanish",
        },
        hero: {
          title: "1-sonli Angor raqamli texnalogiyalar texnikumi",
          subtitle: "Bugun bilim yig’iladi, kelajak esa undan quriladi",
          startBtn: "Boshlash",
        },
        features: {
          description:
            "Angor tumani 1-sonli raqamli texnalogiyalar texnikumida — zamonaviy imkoniyatlar va hududdagi eng kuchli mutaxassislar bilan hunar egallash maskani",
          title: "Texnikumning o'ziga hos jihatlari",
          f1: "Avtomobillarni mustaqil boshqarish uchun avtodrom",
          f2: "Umumiy maydoni 15 gk. o‘quv-tajriba-amaliyot poligoni",
          f3: "Yer maydoni 6.9 gk. — asalarichilik hudud",
        },
        stats: {
          students: "Talabalar",
          professions: "Kasblar",
          cars: "Avtomobillar",
          teachers: "O‘qituvchilar",
        },
        courses: {
          title: "Kurslarimiz",
        },
        subjects: {
          english: "Ingliz tili",
          russian: "Rus tili",
          math: "Matematika",
        },
        news: {
          viewAll: "Barchasini ko’rish",
          title: "Yangiliklar",
          youth: "Yoshlar bilan ishlash",
          parents: "Ota-onalar yig’ilishi",
          patriotism:
            "Yoshlarni vatanparvarlik ruhida tarbiylash va vataniga mehr bilan o’stirish doirasida texnikumda yig’ilish bo‘lib o’tdi",
          meeting:
            "Texnikumda o’quvchilar bilim darajasini ota-onalarga tanishtirish uchun yig’ilish bo‘lib o‘tdi",
        },
        info: {
          title: "Ma’lumotlar",
          contact: "Murojat uchun",
          digitalCollege: "Raqamli texnikum",
          address: "Angor tumani Qorasuv MFY",
        },
        contact: {
          title: "Biz bilan bog’lanish",
          name: "Ism/familiya",
          email: "Email",
          message: "Xabar",
          address: "Bizning manzil",
          addressa: "Angor tumani Qorasuv MFY",
        },
      },
    },
    ru: {
      translation: {
        navbar: {
          home: "Главная",
          about: "О нас",
          courses: "Курсы",
          news: "Новости",
          contact: "Контакты",
        },
        hero: {
          title: "Ангорский цифровой техникум №1",
          subtitle: "Сегодня собирается знание, завтра строится будущее",
          startBtn: "Начать",
          description:
            "Ангорский районный цифровой техникум №1 — место, где современные возможности и лучшие специалисты региона помогают получить профессию",
        },
        features: {
          description:
            "Ангорский районный цифровой техникум №1 — место, где современные возможности и лучшие специалисты региона помогают получить профессию",
          title: "Особенности техникума",
          f1: "Автодром для самостоятельного управления автомобилями",
          f2: "Учебно-практический полигон площадью 15 гектаров",
          f3: "Земельный участок 6,9 гектаров — зона пчеловодства",
        },
        stats: {
          students: "Студенты",
          professions: "Профессии",
          cars: "Автомобили",
          teachers: "Преподаватели",
        },
        courses: {
          title: "Наши курсы",
        },
        subjects: {
          english: "Английский язык",
          russian: "Русский язык",
          math: "Математика",
        },
        news: {
          viewAll: "Посмотреть все",
          title: "Новости",
          youth: "Работа с молодежью",
          parents: "Собрание родителей",
          patriotism:
            "В рамках воспитания молодежи в духе патриотизма и любви к Родине в техникуме состоялось собрание",
          meeting:
            "В техникуме прошло собрание для ознакомления родителей с уровнем знаний учащихся",
        },
        info: {
          title: "Информация",
          contact: "Для обращения",
          digitalCollege: "Цифровой техникум",
          address: "Ангорский район, махалля Карасув",
        },
        contact: {
          title: "Связаться с нами",
          name: "Имя и фамилия",
          email: "Эл. почта",
          message: "Сообщение",
          address: "Наш адрес",
          addressa: "Ангорский район, махалля Карасув",
        },
      },
    },
    en: {
      translation: {
        navbar: {
          home: "Home",
          about: "About Us",
          courses: "Courses",
          news: "News",
          contact: "Contact",
        },
        hero: {
          title: "Angor Digital Technology College No.1",
          subtitle: "Knowledge is gathered today, the future is built from it",
          startBtn: "Get Started",
        },
        features: {
          description:
            "At Angor District Digital Technology College No.1 — modern facilities and the region's top specialists provide opportunities to gain a profession",
          title: "Unique Features of the College",
          f1: "Autodrome for independent car driving practice",
          f2: "Training and practice field covering 15 hectares",
          f3: "Land area of 6.9 hectares — beekeeping zone",
        },
        stats: {
          students: "Students",
          professions: "Professions",
          cars: "Cars",
          teachers: "Teachers",
        },
        courses: {
          title: "Our Courses",
        },
        subjects: {
          english: "English",
          russian: "Russian",
          math: "Mathematics",
        },
        news: {
          viewAll: "View All",
          title: "News",
          youth: "Working with Youth",
          parents: "Parents’ Meeting",
          patriotism:
            "Within the framework of educating youth in the spirit of patriotism and love for the homeland, a meeting was held at the college",
          meeting:
            "A meeting was held at the college to introduce parents to the students’ level of knowledge",
        },
        info: {
          title: "Information",
          contact: "Contact",
          digitalCollege: "Digital College",
          address: "Karasuv neighborhood, Angor district",
        },
        contact: {
          title: "Contact Us",
          name: "Full Name",
          email: "Email",
          message: "Message",
          address: "Our Address",
          addressa: "Karasuv neighborhood, Angor district",
        },
      },
    },
  },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
