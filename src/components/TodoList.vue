<script setup>
import { ref } from "vue";


const todos = ref([
  {
    id: 1,
    title: 'Do the dishes'
  },
  {
    id: 2,
    title: 'Take out the trash'
  },
  {
    id: 3,
    title: 'Mow the lawn'
  }
])
let nextTodoId = todos.value.length + 1
const newTodoText = ref('')

function addNewTodo() {
  todos.value.push({ id: nextTodoId++, title: newTodoText.value })
  newTodoText.value = ''
  console.log(todos.value)
}
</script>

<template>
  <el-form v-on:submit.prevent="console.log(addNewTodo)">
    <label for="new-todo">Add a todo</label>
    <el-input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
    <el-button @click="addNewTodo">Add</el-button>
  </el-form>
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id" :title="todo.title"> {{ todo.title }}
      <el-button @click="todos.splice(index, 1)">Remove</el-button>
    </li>
  </ul>
</template>

<style scoped></style>