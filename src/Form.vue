<template>
  <form class="container" @submit.prevent="createEl">
    <div>
      Symbol
      <input class="text-input__input inp--padding" v-model="form.symbol"/>
    </div>
    <div>
      Weight
      <input class="text-input__input inp--padding" v-model="form.weight"/>
    </div>
    <button class="submit__button" type="submit"> Send </button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      form: {
        symbol: '',
        weight: '',
      }
    }
  },
  methods: {
    createEl() {
      this.$emit('create-el', this.form);
      this.form = {
        symbol: '',
        weight: '',
      }
    }
  }
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
    width: 210px;
    padding: 8px;
    height: max-content;
  }

  .submit__button {
    width: 120px;
    height: 24px;
    margin-right: 28px;
    background-color: lightgreen;
    border: 1px solid;
    border-radius: 4px;
  }
</style>
