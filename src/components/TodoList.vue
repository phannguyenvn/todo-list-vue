<template>
  <div>
    <input type="text" class="todo-input" placeholder="What needs to be done">
    <h1>todo list</h1>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      msg: 'Welcome to Your Todo List App'
    }
  }
}
</script>

<style lang="scss">

  .todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
    &:focus {
      outline: 0;
    }
  }

</style>
