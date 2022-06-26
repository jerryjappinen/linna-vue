<script>
export default {
  data () {
    return {
      componentPages: [
        'AppStoreBadge',
        'ExternalLink'
      ]
    }
  }
}
</script>

<template>
  <div>
    <li
      v-for="componentPage in componentPages"
      :key="componentPage"
    >
      <NuxtLink :to="'/Doc' + componentPage">
        {{ componentPage }}
      </NuxtLink>
    </li>
  </div>
</template>
