// nuxt.config.{js,ts}
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "Jose Agudo",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Mi portafolio profesional" },
      ],
      htmlAttrs: {
        lang: "es",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],

  css: [
    // CSS file in the project
    "@/assets/css/input.css",
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  plugins: [{ src: "@/plugins/aos", ssr: false }, "~/plugins/fontawesome.js"],
  target: "static",
});
