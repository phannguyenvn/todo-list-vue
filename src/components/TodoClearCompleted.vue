<template>
  <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
</template>

<script>
export default {
  name: 'todo-clear-completed',
  computed: {
    showClearCompletedButton() {
      return this.$store.getters.showClearCompletedButton
    }
  },
  methods: {
    clearCompleted() {
      // eventBus.$emit('clearCompletedTodos')
      // this.$store.state.todos = this.$store.state.todos.filter(todo => !todo.completed)
      this.$store.dispatch('clearCompleted')
    }
  }
}
</script>