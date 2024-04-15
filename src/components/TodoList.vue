<script setup>
import {onMounted, ref} from "vue";


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
let inputRef = ref(null);

onMounted(() => {
  inputRef.value.focus()
})

function addNewTodo() {
  todos.value.push({id: nextTodoId++, title: newTodoText.value})
  newTodoText.value = ''
  console.log(todos.value)
}
</script>

<template>
  <el-form @submit.prevent="addNewTodo">
    <!--    <label for="new-todo">Add a todo</label>-->
    <el-input ref="inputRef" style="max-width: 480px" v-model="newTodoText" id="new-todo"
              placeholder="E.g. Feed the cat"/>

    <el-button style="margin-left: 4px" type="primary" @click="addNewTodo">Add</el-button>
  </el-form>

  <el-card style="max-width: 480px">

    <p class="todo-item" v-for="(todo, index) in todos" :key="todo.id" :title="todo.title"> {{ todo.title }}
      <el-button @click="todos.splice(index, 1)">Remove</el-button>
    </p>
    <!--    <template #footer>Footer content</template>-->
  </el-card>

</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>