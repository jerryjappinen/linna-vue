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
    },

    color: {
      type: String,
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
      ['c-click-button-' + color]: color,
      ['c-click-button-' + color + '-disabled']: color && disabled,
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

<style>

.c-click-button {
  align-items: center;

  transition-property: background-color, color, transform;
  transition-duration: var(--transition-fast);
}

.c-click-button-inline {
  display: inline-flex;
}

.c-click-button-block {
  display: flex;
  text-align: center;
  justify-content: center;
}

.c-click-button-enabled {
  cursor: pointer;
}

.c-click-button-enabled:active {
  transform: translateY(2px);
}

.c-click-button-secondary,
.c-click-button-primary {
  border-radius: var(--radius);
  font-weight: var(--semibold);
}

.c-click-button-pad {
  padding: var(--pad-small) var(--pad-large);
}

.c-click-button-primary {
  color: var(--white);
  background-color: var(--blue);
}

.c-click-button-secondary,
.c-click-button-link {
  color: var(--blue);
}

/* .c-click-button-link {
  font-weight: var(--semibold);
} */

.c-click-button-primary-disabled {
  color: var(--white-translucent);
}

.c-click-button-primary-secondary-disabled,
.c-click-button-link-disabled {
  color: var(--blue-translucent);
}

</style>
