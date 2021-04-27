import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          firstName: "Alex",
          secondName: "Gribenchenko",
          fullName: "Alex Gribenchenko",
          bio:
            "I’m Ukraine-based developer. I work for clients all over the world. I specialize in front-end development, and I love what I do.",
          hi: "Hi, I'm ",
          languages: [],
          aboutTitle: "Hi! My name is Alex.",
          aboutBody1:
            "If you are looking for someone who can hit the ground running and loves working with website, I’d love to be considered. I am a front-end web developer, who can take care of your website from scratch to advance stage.",
          aboutBody2:
            "My key skills are the following: HTML, CSS, JavaScript,TypeScript, React, Redux, Context API, Firebase, WordPress.",
          aboutBody3:
            "I am highly motivated and innovative developer with a keen eye for detail and a strong work ethic. Send me a message and let’s discuss everything further. I will be glad to apply my experience and knowledge working on your product!",
          homeNavLink: "Home",
          aboutNavLink: "About",
          projectsNavLink: "Projects",
          mySkills: "My Skills",
          myProjects: "My Projects",
          description: "Description",
          techs: "Techs",
          moreTitle: "More",
          demoTitle: "Demo",
          seeDemoTitle: "See Demo...",
          srcTitle: "Source",
          seeSrcTitle: "See Project on GitHub",
          seeMore: "See More...",
        },
      },
      ua: {
        translation: {
          firstName: "Олександр",
          secondName: "Грибенченко",
          fullName: "Олександр Грибенченко",
          bio:
            "Я розробник з України. Я працюю з клієнтами по всьому світу. Я спеціалізуюся на фронтенд-розробці, і мені подобається те, що я роблю.",
          hi: "Привіт, я ",
          aboutTitle: "Привіт! Мене звуть Олександр",
          aboutBody1:
            "Якщо ви шукаєте когось, хто може взятися за справу і любить працювати з веб-додатками, я хотів би, щоб ви розглянули мою кандидатуру. Я Front-End розробник, який може подбати про ваш веб-сайті з нуля до релізной стадії",
          aboutBody2:
            "Мої ключові навички: HTML, CSS, JavaScript,TypeScript, React, Redux, Context API, Firebase, WordPress.",
          aboutBody3:
            "Я високомотивований і інноваційний розробник з увагою до деталей і твердої трудової етикою. Надішліть мені електроного листа, і давайте обговоримо усы деталі. Буду радий застосувати свій досвід і знання в роботі над вашим продуктом!",
          homeNavLink: "Головна",
          aboutNavLink: "Про мене",
          projectsNavLink: "Проекти",
          mySkills: "Мої навички",
          myProjects: "Мої проекти",
          description: "Опис",
          techs: "Технології",
          moreTitle: "Докладніше",
          demoTitle: "Демо",
          seeDemoTitle: "Дивитись демо...",
          srcTitle: "Код",
          seeSrcTitle: "Дивитись проект на GitHub",
          seeMore: "Дивитись докладніше...",
        },
      },
      ru: {
        translation: {
          firstName: "Александр",
          secondName: "Грибенченко",
          fullName: "Александр Грибенченко",
          bio:
            "Я разработчик из Украины. Я работаю с клиентами по всему миру. Я специализируюсь на фронтенд-разработке, и мне нравится то, что я делаю.",
          hi: "Привет, я ",
          aboutTitle: "Привет! Меня зовут Александр",
          aboutBody1:
            "Если вы ищете кого-то, кто может взяться за дело и любит работать веб-приложениями, я хотел бы, чтобы вы рассмотрели мою кандидатуру. Я Front-End разработчик, который может позаботиться о вашем веб-сайте с нуля до релизной стадии",
          aboutBody2:
            "Мои ключевые навыки: HTML, CSS, JavaScript,TypeScript, React, Redux, Context API, Firebase, WordPress.",
          aboutBody3:
            "Я высокомотивированный и инновационный разработчик с вниманием к деталям и твердой трудовой этикой. Отправьте мне сообщение, и давайте обсудим все дальше. Буду рад применить свой опыт и знания в работе над вашим продуктом!",
          homeNavLink: "Главная",
          aboutNavLink: "Обо мне",
          projectsNavLink: "Проекты",
          mySkills: "Мои навыки",
          myProjects: "Мои проекты",
          description: "Описание",
          techs: "Технологии",
          moreTitle: "Подробнее",
          demoTitle: "Демо",
          seeDemoTitle: "Смотреть демо...",
          srcTitle: "Код",
          seeSrcTitle: "Смотреть проект на GitHub",
          seeMore: "Смотреть подробнее...",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
