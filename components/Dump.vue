<script setup>
import { isNumber, isString } from 'lodash-es'

defineProps({
  data: {
    default: null
  }
})

const content = computed(() => {

  if (isNumber(props.data) || isString(props.data)) {
    return props.data
  }

  return JSON.stringify(props.data, null, 2)
})
</script>

<template>
  <pre class="c-dump"><code>{{ content }}</code></pre>
</template>
