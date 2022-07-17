<script>
export default {

  props: {

    tel: {
      type: String,
      required: false
    },

    sms: {
      type: String,
      required: false
    },

    body: {
      type: String,
      required: false
    }

  },

  computed: {

    href () {
      return (this.sms || this.body ? 'sms' : 'tel') +
        ':' +
        this.tel +
        (this.body
          ? '?' + this.body
          : '')
    }

  }

}
</script>

<template>
  <a
    class="c-phone-number"
    :href="href"
  ><slot /></a>
</template>
