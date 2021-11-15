<template>
  <div class="jd-button">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'jd-button',
  props: {
    type: String
  }
}
</script>
 
<style scoped>
.jd-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
</style>
 