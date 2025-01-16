<template>
  <header class="px-10 max-w-full">
    <nav
      class="pt-5 pb-5 border-gray-200 rounded bg-gray-50 dark:bg-transparent bg-transparent"
    >
      <div class="flex flex-wrap items-center justify-between">
        <a href="#" class="flex items-center">
          <img
            src="../assets/img/logo.webp"
            class="h-10 mr-3 sm:h-24 md:h-14"
            alt="Jose Agudo Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white"
            >Jose Agudo</span
          >
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full lg:block lg:w-auto" id="navbar-solid-bg">
          <ol
            class="flex flex-col mt-4 md:text-xl rounded-lg bg-gray-50 lg:flex-row lg:items-center lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700"
          >
            <li>
              <a
                href="#about"
                class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-gray-100 hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
                >Sobre mi</a
              >
            </li>

            <li>
              <a
                href="#stacks"
                class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-gray-100 hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="200"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
                >Stacks</a
              >
            </li>

            <li>
              <a
                href="#projects"
                class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-gray-100 hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="300"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
                >Proyectos</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 dark:text-gray-100 hover:text-[#64ffda] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="400"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
                >Contacto</a
              >
            </li>
            <li>
              <button
                type="button"
                class="btn text-[#64ffda] max-lg:w-full bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-transparent dark:hover:bg-[#64ffda] dark:hover:bg-opacity-20 dark:focus:ring-blue-800 hover:bg-[#64ffda] hover:bg-opacity-20"
                aria-current="page"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                <a href="/CV_Jose_Agudo.pdf" download="">Curriculum Vitae</a>
              </button>
            </li>
          </ol>
        </div>
      </div>
    </nav>

    <div
      class="w-1/2 container max-sm:w-full text-white h-[40rem] max-sm:h-[32rem] max-lg:h-[43rem] max-xl:h-33 max-2xl:h-33 flex flex-col justify-center md:w-3/4"
    >
      <div class="">
        <h1
          class="text-[#64ffda] font-bold text-[16px] max-sm:text-[18px] mb-[30px] max-sm:mb-[15px]"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          Hola, mi nombre es
        </h1>
      </div>
      <div class="">
        <h2
          class="text-[#ccd6f6] font-bold text-[80px] max-sm:text-[30px] md:text-[60px]"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="200"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          Jose Agudo
        </h2>
      </div>
      <div class="">
        <h2
          class="text-[#8892b0] font-bold text-[80px] max-sm:text-[30px] mt-1 md:text-[60px]"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          Front-End Developer.
        </h2>
      </div>
      <div class="">
        <p
          class="mt-5 max-w-2xl text-[#8892b0] text-[20px] max-sm:text-[16px]"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="400"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          Front-End developer especializado en
          <span class="text-[#64ffda]"
            >HTML, CSS, JavaScript, Vue3, Nuxt, Quasar y Tailwind</span
          >. He realizado proyectos con
          <span class="text-[#64ffda]">React, Next y MongoDB.</span>
          Actualmente, estoy centrado en aprender nuevos lenguajes de
          programación para mejorar mis habilidades como programador.
        </p>
      </div>
      <button
        type="button"
        class="btn md:transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 w-fit mt-12 max-sm:mt-6 max-sm:w-fit max-sm:py-5 max-lg:p-8 text-[#64ffda] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-5 text-center m dark:bg-transparent bg-transparent dark:hover:bg-[#64ffda] dark:hover:bg-opacity-20 dark:focus:ring-blue-800 hover:bg-[#64ffda] hover:bg-opacity-20"
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="500"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <a download href="/CV_Jose_Agudo.pdf">Descargar Curriculum Vitae</a>
      </button>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
import { initCollapses } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initCollapses();
});
</script>

<style scoped></style>
