<script setup>
// Poor man's app lifecycle handling
import { isClient } from 'linna-util'

import { NuxtLayout, NuxtPage } from 'nuxt'
import { onMounted } from 'vue'

const props = defineProps({

  onInit: {
    type: Function,
    default: null
  },

  onClientInit: {
    type: Function,
    default: null
  },

  onServerInit: {
    type: Function,
    default: null
  }

})

if (props.onInit) {
  props.onInit()
}

if (props.onServerInit && !isClient()) {
  props.onServerInit()
}

// Only called in client
onMounted(() => {
  if (props.onClientInit) {
    props.onClientInit()
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
