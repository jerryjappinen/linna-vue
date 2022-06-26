<script>
import AppStoreBadge from '../../components/AppStoreBadge'

export default {
  components: {
    AppStoreBadge
  }
}
</script>

<template>
  <div>

    <h1>AppStoreBadge</h1>

    <p>
        <AppStoreBadge />
    </p>

    <p>
        <AppStoreBadge :light="true" />
    </p>

  </div>
</template>
