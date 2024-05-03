<template>
  <form class="container">
    <div>
      Symbol
      <input class="text-input__input inp--padding" v-model="symbol"/>
    </div>
    <div>
      Weight
      <input class="text-input__input inp--padding" v-model="weight"/>
    </div>
    <button type="submit" @click="createEl"> Send </button>
  </form>
</template>

<script setup>
const emit = defineEmits()
let symbol = "";
let weight = "";

function createEl(el) {
  console.log(symbol)
  console.log(weight)
  emit('create-el', {symbol, weight});
}
</script>

<style scoped>
  .inp--padding {
    padding: 6px;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: floralwhite;
    padding: 24px;
    height: max-content;
  }
</style>
