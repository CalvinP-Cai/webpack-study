<script setup>
import { ref } from "vue";

const msg = ref('Hello vue 3.x!')

</script>

<template>
  <div class="example">{{ msg }}</div>
</template>

<style scoped lang="css">
.example {
  color: green;
}
</style>