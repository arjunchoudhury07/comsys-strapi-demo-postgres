import logo from "./extensions/comsysLogo.png";
export default {
  config: {
    auth: {
      logo,
    },
    // Replace the favicon
    head: {
      logo,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo,
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "COMSYS Dashboard",

        "Auth.form.welcome.title": "Welcome to COMSYS",

        "Auth.form.welcome.subtitle": "Login to COMSYS account",

        "app.components.HomePage.welcome.again":
          "Welcome to COMSYS Admin Panel👋",
        "HomePage.helmet.title": "Homepage | COMSYS",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
