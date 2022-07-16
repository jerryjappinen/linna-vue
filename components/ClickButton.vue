<script>
export default {

  props: {

    block: {
      type: Boolean,
      default: false
    },

    pad: {
      type: Boolean,
      default: null
    },

    href: {
      type: String,
      default: null
    },

    to: {
      type: [Object, String],
      default: null
    },

    mailto: {
      type: String,
      default: null
    },

    tel: {
      type: String,
      default: null
    },

    submit: {
      type: Boolean,
      default: null
    },

    external: {
      type: Boolean,
      default: null
    },

    noIndex: {
      type: Boolean,
      default: null
    },

    disabled: {
      type: Boolean,
      default: null
    }

  },

  computed: {

    tag () {
      if (this.to) {
        return 'NuxtLink'
      } else if (this.href || this.mailto || this.tel) {
        return 'a'
      }

      return 'button'
    },

    is () {
      return this.tag === 'NuxtLink' ? resolveComponent('NuxtLink') : this.tag
    },

    bind () {
      const bind = {
        disabled: this.disabled ? true : undefined
      }

      if (this.noIndex || (this.external && this.noIndex !== false)) {
        bind.rel = 'nofollow noopener noreferrer'
      } else {
        bind['no-rel'] = true
      }

      if (this.external) {
        bind.target = '_blank'
      }

      // Type-specific
      if (this.tag === 'NuxtLink') {
        bind.to = this.to

      } else if (this.tag === 'a') {
        bind.href = this.href
          ? this.href
          : this.mailto
            ? 'mailto:' + this.mailto
            : this.tel ? 'tel:' + this.tel : null

      } else if (this.tag === 'button') {
        bind.type = this.submit ? 'submit' : 'button'
      }

      return bind
    }

  }

}
</script>

<template>
  <component
    v-bind="bind"
    :is="is"
    :class="{
      ['c-click-button-inline']: !block,
      ['c-click-button-block']: block,
      ['c-click-button-pad']: color === 'primary' || pad,
      ['c-click-button-enabled']: !disabled,
      ['c-click-button-disabled']: disabled
    }"
    class="c-click-button"
  >
    <slot />
  </component>
</template>

<style lang="scss">

.c-click-button {
  @include transition-properties-common;
  @include transition-fast;

  align-items: center;
}

.c-click-button-inline {
  @include inline-flex;
}

.c-click-button-block {
  @include block;
  text-align: center;
  justify-content: center;
}

.c-click-button-enabled {
  @include pointer;

  &:active {
    transform: translateY(2px);
  }
}

.c-click-button-pad {
  @include pad;
}

.c-click-button-disabled {
  @include inherit-cursor;
  @include no-pointer-events;
}

</style>
