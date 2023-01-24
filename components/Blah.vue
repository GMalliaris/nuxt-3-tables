<template>
  <span :id="test">Blah</span>
</template>

<script lang="ts">

export default defineNuxtComponent({
  name: "Blah",
  props: {
    test: String
  }
})
</script>