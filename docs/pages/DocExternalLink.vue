<script>
export default {
  data () {
    return {
      url: 'https://jerryjappinen.com'
    }
  }

}
</script>

<template>
  <div>

    <h1>ExternalLink</h1>

    <p>
      <ExternalLink :href="url">
        {{ url }}
      </ExternalLink>
    </p>

    <p>
      <ExternalLink
        :here="true"
        :href="url"
      >
        {{ url }}
      </ExternalLink>
    </p>

    <p>
      <ExternalLink
        :refer="true"
        :href="url"
      >
        {{ url }}
      </ExternalLink>
    </p>

  </div>
</template>
