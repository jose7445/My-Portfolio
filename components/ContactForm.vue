<template>
  <div class="mx-auto">
    <p
      class="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
    >
      Do you have any questions or want to contact me for more information? Do
      not hesitate!
    </p>
    <form
      action="#"
      class="py-5 space-y-8 max-w-screen-md mx-auto"
      method="post"
    >
      <div>
        <label
          for="email"
          class="after:content-['*'] after:ml-0.5 after:text-[#64ffda] block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="focus:outline-none focus:border-[#64ffda] focus:ring-3 shadow-sm border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@example.com"
          required
        />
      </div>
      <div>
        <label
          for="subject"
          class="after:content-['*'] after:ml-0.5 after:text-[#64ffda] block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Subject</label
        >
        <input
          type="text"
          id="subject"
          class="focus:outline-none focus:border-[#64ffda] focus:ring-1 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="after:content-['*'] after:ml-0.5 after:text-[#64ffda] block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Your message</label
        >
        <textarea
          id="message"
          rows="6"
          class="focus:outline-none focus:border-[#64ffda] focus:ring-1 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        class="btn text-[#64ffda] font-medium rounded-lg text-sm px-5 py-2.5 text-center m dark:bg-transparent dark:hover:bg-[#64ffda] dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
        aria-current="page"
        @click="sendEmail"
      >
        Send message
      </button>
    </form>
  </div>
</template>

<script setup>
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "<sender’s email address>",
    Password: "<email password>",
    To: "<recipient’s email address>",
    From: "<sender’s email address>",
    Subject: "<email subject>",
    Body: "<email body>",
  }).then((message) => alert("mail sent successfully"));
}
</script>
