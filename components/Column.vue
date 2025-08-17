<template>
  <div :class="cssClass">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    cssClass: {
      type: String,
      default: 'col'
    }
  }
}
</script>
