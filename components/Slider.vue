<script setup>
import { ref, computed, unref } from 'vue'

// https://www.npmjs.com/package/vue3-slider
import Vue3Slider from "vue3-slider"

const props = defineProps({

  modelValue: {
    type: Number,
    required: true
  },

  min: {
    type: Number,
    default: 0
  },

  max: {
    type: Number,
    default: 100
  },

  step: {
    type: Number,
    default: 1
  },

  tooltip: {
    type: [Boolean, String],
    default: true
  },

  // Callback that formats the visible text in tooltip
  // Receives the value as a parameter
  formatTooltip: {
    type: Function,
    default: null
  },

  // flipTooltip: {
  //   type: Boolean,
  //   default: false
  // },

  vertical: {
    type: Boolean,
    default: false
  },

  circular: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  }

})

const emit = defineEmits([
  'update:modelValue'
])



const mouseDown = ref(false)

const value = computed({
  get () {
    return props.modelValue.value
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

// https://www.npmjs.com/package/vue3-slider#user-content-props
const options = computed(() => {
  const tooltip = unref(props.tooltip)
  const circular = unref(props.circular)
  const orientation = unref(props.vertical)
    ? 'vertical'
    : circular || circular === 0
      ? 'circular'
      : 'horizontal'

  const opts = {
    disabled: props.disabled,
    max: props.max,
    min: props.min,
    limit: undefined,
    step: props.step,
    tooltip: !!tooltip,
    tooltipText: typeof tooltip === 'string' ? tooltip : undefined,
    formatTooltip: props.formatTooltip,
    orientation,

    alwaysShowHandle: true,
    repeat: false,
    sticky: false,
    flip: false,
    flipTooltip: false,
    circleOffset: typeof circular === 'number' ? circular : undefined,

    // Style
    height: 4,
    handleScale: 2,
    color: '#000',
    trackColor: '#ccc',
    tooltipColor: '#000',
    tooltipTextColor: '#fff',
  }

  return opts
})



const onChange = () => {}

const onDrag = () => {}

const onDragStart = () => {
  mouseDown.value = true
}

const onDragEnd = () => {
  mouseDown.value = false
}
</script>

<template>
  <Vue3Slider
    :class="{
      'control-disabled': disabled,
      'control-enabled': !disabled,
      'control-mouse-down': mouseDown
    }"
    class="c-slider control"
    @change="onChange"
    @drag-start="onDragStart"
    @drag-end="onDragEnd"
    @dragging="onDrag"
    v-model="value"
    v-bind="options"
  />
</template>

<style lang="scss">

.c-slider {

  .vue-slider-dot-handle {
    @include shadow-tight;
    background-clip: padding-box;
    background-color: $white;
    border-width: 1px;
    border-color: translucent($very-dark);
  }

  .vue-slider-rail {
    background-color: translucent($very-dark);
  }

  .vue-slider-process {
    background-color: $very-dark;
  }

  .vue-slider-dot-tooltip-inner {
    border-color: $very-dark;
    background-color: $very-dark;
  }

}

</style>
