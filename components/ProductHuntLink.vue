<script setup>
import ExternalLink from './ExternalLink'

const props = defineProps({
  postSlug: {
    type: String,
    required: true
  }
})

const href = computed(() => {
  return 'https://www.producthunt.com/posts/' + props.postSlug + '?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-' + props.postSlug
})
</script>

<template>
  <ExternalLink
    :href="href"
    class="c-product-hunt-link"
  >
    <slot />
  </ExternalLink>
</template>
