<template>
  <!-- Container -->
  <!-- Card wrapper -->
  <div
    class="flex flex-wrap w-full pb-20 md:items-center"
    data-aos="fade-zoom-in"
    data-aos-duration="1500"
    data-aos-delay="400"
    data-aos-easing="ease-out-cubic"
    data-aos-once="true"
  >
    <!-- Card image -->
    <div
      class="mx-auto md:w-2/5 md:h-auto relative transition duration-500 ease-in-out transform hover:scale-105 grayscale hover:grayscale-0"
    >
      <a href="https://secondchanceapp.netlify.app/#/"
        ><img
          class="rounded-md shadow-xl"
          src="../assets/img/second.webp"
          alt="second"
          width="600"
          height="400"
      /></a>
    </div>
    <!-- ./Card image -->

    <!-- Card body -->
    <div class="bg-transparent w-full md:w-3/5 max-sm:shadow-xl">
      <!-- Card body - outer wrapper -->
      <div class="mx-auto px-6 md:px-0 md:pt-6 md:-ml-16 relative">
        <!-- Card body - inner wrapper -->
        <div
          class="bg-[#112240] lg:h-56 p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center rounded-md"
        >
          <!-- Card title and subtitle -->
          <div
            class="w-full lg:w-auto lg:border-right lg:border-solid text-center md:text-left"
          >
            <h2 class="text-[#64ffda] text-xl font-bold">SecondChance</h2>
            <p class="mb-0 mt-3 text-[#ccd6f6] text-sm">Proyecto Website</p>
            <hr class="w-full md:ml-0 mt-4 border xl:hidden" />
          </div>
          <!-- ./Card title and subtitle -->

          <!-- Card description -->
          <div class="w-full lg:w-9/12 lg:pl-10">
            <p
              class="text-md mt-4 lg:mt-0 text-md text-[#8892b0] max-sm:text-center"
            >
              Website para adoptar animales. Los usuarios pueden registrarse y
              disponen de herramientas a su disposición.
            </p>
          </div>
          <!-- ./Card description -->

          <!-- ./Call to action button -->
        </div>
        <!-- ./Card body - inner wrapper -->
      </div>
      <div class="flex-col">
        <div
          class="flex px-5 text-[#a8b2d1] m-2 text-[14px] gap-5 max-sm:justify-center max-sm:text-[12px]"
        >
          <p>HTML5</p>
          <p>SCSS</p>
          <p>Vue3</p>
          <p>Quasar</p>
          <p>Firebase</p>
        </div>
        <div class="flex px-5 text-[#a8b2d1] m-2 gap-5 max-sm:justify-center">
          <a
            href="https://github.com/jose7445/SecondChance"
            target="_blank"
            aria-label="github"
            class="text-2xl md:dark:hover:text-[#64ffda]"
            ><Icon name="uil:github"
          /></a>
          <a
            href="https://secondchanceapp.netlify.app/#/"
            class="text-2xl md:dark:hover:text-[#64ffda]"
            aria-label="website"
            ><Icon name="uil:enter"
          /></a>
        </div>
      </div>

      <!-- ./Card body - outer wrapper -->
    </div>
    <!-- ./Card body -->
  </div>
  <!-- ./Card wrapper -->

  <!-- ./Container -->
</template>
