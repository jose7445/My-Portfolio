<template>
  <div
    class="flex justify-center items-center py-5 max-lg:sr-only"
    data-aos="fade-down"
    data-aos-duration="1500"
    data-aos-delay="1200"
    data-aos-easing="ease-out-cubic"
    data-aos-once="true"
  >
    <button
      type="button"
      class="mouse animate-bounce"
      @click="goto"
      aria-label="mouse"
    ></button>
  </div>
  <main class="container mx-auto">
    <div
      class="orientation max-sm:hidden max-md:hidden"
      data-aos="fade-down"
      data-aos-duration="1500"
      data-aos-delay="1200"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <ul class="orientation_ul text-white py-2">
        <li class="pb-10">
          <a href="https://github.com/jose7445">
            <svg
              class="h-6 w-6 md:dark:hover:text-[#64ffda]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              /></svg
          ></a>
        </li>

        <li class="pb-10">
          <a href="https://www.linkedin.com/in/jose-agudo-sabate-bb1041137/"
            ><svg
              class="h-6 w-6 md:dark:hover:text-[#64ffda]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" /></svg
          ></a>
        </li>
      </ul>
    </div>
    <div
      class="orientation_right max-sm:hidden max-md:hidden"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="1200"
      data-aos-easing="ease-out-cubic"
    >
      <ul class="orientation_right_ul text-white py-2">
        <li class="pb-10 md:dark:hover:text-[#64ffda]">
          <a href="mailto:jose7445@hotmail.com">jose7445@hotmail.com</a>
        </li>
      </ul>
    </div>
    <section
      class="max-sm:px-10 mx-auto w-8/12 py-[130px] max-sm:w-auto max-sm:py-[80px] max-lg:w-3/4"
      id="about"
      data-aos="fade-zoom-in"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <h2
        class="py-5 text-[#64ffda] font-bold text-[30px] max-sm:text-[20px] line_title"
      >
        01. &nbsp;<span class="text-[#ccd6f6]">Sobre mi</span>
      </h2>
      <div
        class="about_me grid grid-cols-[3fr,2fr] gap-12 max-lg:grid-cols-none"
      >
        <div class="text-[20px] text-[#8892b0] max-sm:text-[16px]">
          <p>
            Me llamo Jose Agudo y soy desarrollador front-end. Mi pasión siempre
            ha sido la programación, y por eso me he formado tanto académica
            como personalmente. He estudiado un
            <span class="text-[#64ffda]">CFGM en Sistemas Informáticos</span>,
            después un <span class="text-[#64ffda]">CFGS en Sonido</span> y por
            último un
            <span class="text-[#64ffda]">Grado en Multimedia (UOC)</span>.
          </p>

          <p class="py-5">
            Actualmente, sigo formándome a través de proyectos personales y
            cursos en línea. El mundo de la programación cambia constantemente y
            por eso quiero seguir formándome cada día para mejorar mis
            habilidades.
          </p>

          <p>
            Con este portafolio quiero mostrar mis habilidades y poder encontrar
            un trabajo en el que pueda mejorar y alcanzar mis objetivos.
          </p>
        </div>
        <div class="mx-auto photo">
          <img
            class="max-sm:rounded-2xl"
            src="../assets/img/cv.webp"
            alt="mer"
          />
        </div>
      </div>
    </section>

    <section
      class="max-sm:px-10 mx-auto w-6/12 py-[130px] max-sm:py-[80px] max-sm:w-auto text-[#8892b0] max-lg:w-3/4"
      id="stacks"
    >
      <h2
        class="py-5 text-[#64ffda] font-bold text-[30px] max-sm:text-[20px] line_title_two"
        data-aos="fade-zoom-in"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        02. &nbsp;<span
          class="text-[#ccd6f6]"
          data-aos="fade-zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
          >Stacks</span
        >
      </h2>
      <p
        class="text-[20px] max-sm:text-[16px]"
        data-aos="fade-zoom-in"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        A continuación muestro las diferentes tecnologías que he ido aprendiendo
        a lo largo de mi carrera universitaria y personal. Estos son los stacks
        que más domino y que he utilizado para realizar proyectos como
        front-end. Actualmente, estoy realizando un curso a través de la
        plataforma Udemy para mejorar mis habilidades con
        <span class="text-[#64ffda]">React</span>. También domino CMS's como
        <span class="text-[#64ffda]">WordPress</span> o
        <span class="text-[#64ffda]">Drupal</span>.
      </p>
      <div
        class="base flex flex-wrap justify-between gap-x-12 max-sm:gap-0 max-sm:justify-around"
      >
        <div
          class="flex flex-wrap justify-evenly py-14 gap-14 cursor-pointer max-lg:gap-18"
        >
          <div
            class="model-1 group flex relative"
            data-aos="fade-zoom-in"
            data-aos-delay="200"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <i
              class="devicon-html5-plain-wordmark text-9xl max-sm:text-8xl"
            ></i>
          </div>

          <div
            class="model-1 group flex relative"
            data-aos="fade-zoom-in"
            data-aos-delay="400"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <i class="devicon-css3-plain-wordmark text-9xl max-sm:text-8xl"></i>
          </div>

          <div
            class="model-1 group flex relative"
            data-aos="fade-zoom-in"
            data-aos-delay="600"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <i class="devicon-sass-original text-9xl max-sm:text-8xl"></i>
          </div>

          <div
            class="model-1 group flex relative"
            data-aos="fade-zoom-in"
            data-aos-delay="800"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <i class="devicon-javascript-plain text-9xl max-sm:text-8xl"></i>
          </div>

          <div
            class="model-1 group flex relative"
            data-aos="fade-zoom-in"
            data-aos-delay="1000"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <i
              class="devicon-vuejs-plain-wordmark text-9xl max-sm:text-8xl"
            ></i>
          </div>

          <div
            class="model-1 group flex relative"
            data-aos="fade-zoom-in"
            data-aos-delay="1200"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <i
              class="devicon-firebase-plain-wordmark text-9xl max-sm:text-8xl"
            ></i>
          </div>

          <div
            class="model-1 group flex relative"
            data-aos="fade-zoom-in"
            data-aos-delay="1400"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <i
              class="devicon-github-original-wordmark text-9xl max-sm:text-8xl"
            ></i>
          </div>

          <div
            class="model-1 group flex relative"
            data-aos="fade-zoom-in"
            data-aos-delay="1800"
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <i
              class="devicon-tailwindcss-original-wordmark text-9xl max-sm:text-8xl"
            ></i>
          </div>
        </div>
      </div>
    </section>

    <section
      class="max-sm:px-10 mx-auto py-[130px] max-sm:py-[80px] max-sm:w-auto w-4/5 max-lg:w-3/4"
      id="projects"
      data-aos="fade-zoom-in"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <h2
        class="py-5 text-[#64ffda] font-bold text-[30px] max-sm:text-[20px] line_title"
      >
        03. &nbsp;<span class="text-[#ccd6f6]">Proyectos</span>
      </h2>

      <SectionExperience />
    </section>

    <section
      class="max-sm:px-10 mx-auto py-[130px] max-sm:py-[70px] max-sm:w-auto w-5/12 max-lg:w-3/4"
      id="contact"
      data-aos="fade-zoom-in"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <h2
        class="py-5 text-[#64ffda] font-bold text-[30px] max-sm:text-[20px] line_title"
      >
        04. &nbsp;<span class="text-[#ccd6f6]">Contacto</span>
      </h2>

      <!-- <ContactForm /> -->
      <div class="mx-auto">
        <div class="text-center">
          <p
            class="mb-8 lg:mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl"
          >
            Actualmente, estoy buscando nuevos proyectos y nuevas oportunidades
            de trabajo. Si tienes alguna sugerencia o quieres preguntarme algo,
            no dudes en en ponerte en contacto conmigo!
          </p>
          <a class="button" href="mailto:jose7445@hotmail.com">
            <button
              type="button"
              class="btn md:transition ease-in-out bg-transparent hover:-translate-y-1 hover:scale-110 duration-300 w-fit mt-12 max-sm:w-fit max-sm:py-5 text-[#64ffda] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-8 m dark:bg-transparent dark:hover:bg-[#64ffda] dark:hover:bg-opacity-20 dark:focus:ring-blue-800 hover:bg-[#64ffda] hover:bg-opacity-20"
            >
              Dime hola!
            </button>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

function goto() {
  router.replace({ name: route.name, hash: "#about" });
}
// initialize components based on data attribute selectors
</script>

<style scoped>
.line_title {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.line_title:after {
  content: "";
  border-top: 1px solid #233554;
  margin: 0 20px 0 0;
  flex: 1 0 20px;
}

.line_title:after {
  margin: 0 0 0 20px;
}

.photo img {
  --s: 15px; /* size of the frame */
  --b: 2px; /* border thickness */
  --w: 350px; /* width of the image */
  --c: #64ffda;

  width: var(--w);
  aspect-ratio: 1;
  object-fit: cover;
  padding: calc(2 * var(--s));
  --_g: var(--c) var(--b), #0000 0 calc(100% - var(--b)), var(--c) 0;
  background: linear-gradient(var(--_g)) 50%/100% var(--_i, 100%) no-repeat,
    linear-gradient(90deg, var(--_g)) 50% / var(--_i, 100%) 100% no-repeat;
  outline: calc(var(--w) / 2) solid #64ffdb2d;
  outline-offset: calc(var(--w) / -2 - 2 * var(--s));
  transition: 0.4s;
  cursor: pointer;
}

@media (max-width: 600px) {
  .photo img {
    --s: 15px; /* size of the frame */
    --b: 0px; /* border thickness */
    --w: 0; /* width of the image */
    --c: none;
    padding: 0;
    width: 100%;
    object-fit: contain;
  }
}

@media (min-width: 768px) and (max-height: 1024px) {
  .photo img {
    --s: 15px; /* size of the frame */
    --b: 0px; /* border thickness */
    --w: 0; /* width of the image */
    --c: none;
    padding: 0;
    width: 100%;
    object-fit: contain;
  }
}

@media (min-width: 1024px) and (max-height: 1310px) {
  .photo img {
    --s: 15px; /* size of the frame */
    --b: 2px; /* border thickness */
    --w: 350px; /* width of the image */
    --c: #64ffda;

    width: var(--w);
    aspect-ratio: 1;
    object-fit: cover;
    padding: calc(2 * var(--s));
    --_g: var(--c) var(--b), #0000 0 calc(100% - var(--b)), var(--c) 0;
    background: linear-gradient(var(--_g)) 50%/100% var(--_i, 100%) no-repeat,
      linear-gradient(90deg, var(--_g)) 50% / var(--_i, 100%) 100% no-repeat;
    outline: calc(var(--w) / 2) solid #64ffdb2d;
    outline-offset: calc(var(--w) / -2 - 2 * var(--s));
    transition: 0.4s;
    cursor: pointer;
  }
}

.photo img:hover {
  outline: var(--b) solid var(--c);
  outline-offset: calc(var(--s) / -2);
  --_i: calc(100% - 2 * var(--s));
}

.line_title_two {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.line_title_two:before {
  content: "";
  border-top: 1px solid #233554;
  margin: 0 20px 0 0;
  flex: 1 0 20px;
}

.line_title_two:after {
  margin: 0 0 0 20px;
}

.orientation {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: white;
}

.orientation::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: white;
}

.orientation_ul {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.orientation_right {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: white;
}

.orientation_right::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: white;
}

.orientation_right_ul {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}

.orientation_right a {
  writing-mode: vertical-rl;
}
</style>
