<script setup>

/* page */

definePageMeta({
  name: 'general.home',
});

useHead({
  title: '',
});


/* confetti! */

onMounted(() => {
  confettiOnPageSides(2000);
});

</script>


<template>
  <main>
    <content-container class="py-12">

      <h1 class="text-4xl font-bold">
        Hello! I am Yoones Khoshghadam.
      </h1>

      <p class="mt-6">
        I am a Full stack developer. <br />
        I can make Web, Android, iOS or Desktop applications.
      </p>

      <p class="mt-6">
        Let's get in touch:
        <a href="mailto:yoones.khoshghadam@gmail.com" class="text-primary underline font-bold">yoones.khoshghadam@gmail.com</a>
      </p>

      <div class="mt-3 space-x-3">
        <nuxt-link to="https://github.com/yooneskh" target="_blank">
          <u-btn
            icon="i-mdi-github"
            label="Github"
          />
        </nuxt-link>
        <nuxt-link to="https://twitter.com/yooneskh" target="_blank">
          <u-btn
            icon="i-mdi-twitter"
            label="Twitter"
            class="primary"
          />
        </nuxt-link>
      </div>

      <h2 class="mt-12 text-2xl">
        Some things i made
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">

        <nuxt-link to="https://arepo.khoshghadam.com" target="_blank">
          <u-card class="outline neutral interactive">
            <h3 class="text-xl font-bold text-center">
              Arepo
            </h3>
            <p class="mt-2">
              Track who and when opens your emails and ...
            </p>
          </u-card>
        </nuxt-link>

        <nuxt-link to="https://whatithink.khoshghadam.com" target="_blank">
          <u-card class="outline neutral interactive">
            <h3 class="text-xl font-bold text-center">
              What I Think
            </h3>
            <p class="mt-2">
              Ask questions and see how similar your friends think!
            </p>
          </u-card>
        </nuxt-link>

      </div>

    </content-container>
  </main>
</template>
