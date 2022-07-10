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
    <h1>linna docs</h1>

    <h2>Components</h2>

    <li
      v-for="componentPage in componentPages"
      :key="componentPage"
    >
      <NuxtLink :to="'/c-' + componentPage">
        {{ componentPage }}
      </NuxtLink>
    </li>
  </div>
</template>
