<script>
export default {
  data () {
    return {
      componentPages: [
        'AppStoreBadge'
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
      <NuxtLink :to="'/' + componentPage">
        {{ componentPage }}
      </NuxtLink>
    </li>
  </div>
</template>
