<script setup>
import { toPlainText } from 'linna-util'

defineProps({

  body: {
    type: String,
    required: true
  },

  block: {
    default: false
  }

})
</script>

<template>
  <component
    :is="block ? 'div' : 'span'"
    class="c-plaintext"
  >
    {{ body ? toPlainText(body) : '' }}
  </component>
</template>
