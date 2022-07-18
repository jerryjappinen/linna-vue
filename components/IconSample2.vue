<!-- I don't want this wrapper element -->
<template>
  <span class="c-icon">
    <slot />
  </span>
</template>

<style lang="scss">

// Wrapper element will make styling more complicated
.c-icon {
  svg {
    width: 1em;
    height: 1em;
  }
}

</style>
