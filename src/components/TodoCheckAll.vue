<template>
  <div><label><input type="checkbox" :checked="!anyRemaining" @change="allChecked"> Check All</label></div>
</template>

<script>
export default {
  name: "todo-check-all",
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining
    }
  },
  methods: {
    allChecked() {
      // eventBus.$emit("checkAllChanged", this.anyRemaining);
      // this.$store.state.todos.forEach(todo => (todo.completed = event.target.checked));
      this.$store.dispatch('checkAll', event.target.checked)
    }
  }
};
</script>