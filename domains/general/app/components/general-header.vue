<script setup>

const config = useAppConfig();

</script>


<template>
  <header class="border-b-1">

    <content-container class="flex items-center py-2">

      <nuxt-link class="text-lg" :to="{ name: 'general.home' }">
        {{ config.brand.title }}
      </nuxt-link>

    </content-container>

    <slot name="inside-bottom" />

  </header>
</template>