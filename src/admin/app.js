import logo from "./extensions/comsysLogo.png";
import menuLogo from "./extensions/headLogo.png";
export default {
  config: {
    auth: {
      logo,
    },
    // Replace the favicon
    head: {
      favicon: logo,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      menuLogo,
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
