<script setup>
import isClient from 'linna-util/isClient'

import { onMounted } from 'vue'

// NOTE: thse should be available runtime
// import { NuxtLayout, NuxtPage } from 'nuxt'

const emit = defineEmits([
  'init',
  'init:server',
  'init:client',
  'mounted'
])

emit('init')

if (isClient()) {
  emit('init:client')
}

if (!isClient()) {
  emit('init:server')
}

// Only called in client
onMounted(() => {
  emit('mounted')
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
