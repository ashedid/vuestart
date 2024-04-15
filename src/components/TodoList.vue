<script setup>
import {onMounted, ref} from "vue";
import {Finished} from "@element-plus/icons-vue";


import {ElMessage} from 'element-plus';

let todos = ref([
  {
    id: '1',
    title: 'Do the dishes',
    date: '2021/09/01',
    done: false,
    deleted: false

  },
  {
    id: '2',
    title: 'Take out the trash',
    date: '2021/09/02',
    done: false,
    deleted: false
  },
  {
    id: '3',
    title: 'Mow the lawn',
    date: '2021/09/03',
    done: false,
    deleted: false
  }
])
let nextTodoId = todos.value.length + 1
const newTodoText = ref('')
let inputRef = ref(null);
const date = ref('')
onMounted(() => {
  inputRef.value.focus()
})

function addNewTodo() {
  if (date.value === '') {
    alert('Please pick a day')
    return
  }
  if (newTodoText.value === '') {
    alert('Please input a todo')
    return
  }
  todos.value.push({id: nextTodoId++, title: newTodoText.value, date: date.value, done: false, deleted: false})
  ElMessage({
    message: 'New todo ' + newTodoText.value + ' added successfully',
    type: 'success',
  });

  newTodoText.value = ''
}

function deleteTodo(todo) {

  todos.value.splice(indexToDelete(todos, todo.id), 1);
  console.log(todo)
  ElMessage({
    message: 'todo [' + todo.title + '] deleted successfully',
    type: 'success',
  });
}

// function clearChecked() {
//   todos.value = todos.value.filter(todo => !todo.done)
// }

function reverseDone(todo) {
  todo.done = !todo.done

  console.log(todo)
  if (todo.done) {
    ElMessage({
      message: 'todo [' + todo.title + '] done successfully',
      type: 'success',
    });
  } else {
    ElMessage({
      message: 'todo [' + todo.title + '] undone successfully',
      type: 'success',
    });
  }

}

function indexToDelete(todos, todoId) {


  return todos.value.findIndex(todo => todo.id === todoId)


}

function getDoneTodos() {
  return todos.value.filter(todo => todo.done === true)
}

function getUndoneTodos() {
  return todos.value.filter(todo => todo.done === false)
}
</script>

<template>
  <div class="head-icon-text">

    <el-icon size="40">
      <Finished/>
    </el-icon>
    <el-text size="large" tag="b" class="mx-1 head-text" type="primary">To Do</el-text>
  </div>
  <el-form id="main-form" @submit.prevent="addNewTodo" class="form-warp">
    <!--    <label for="new-todo">Add a todo</label>-->


    <el-date-picker style="max-width: 160px;margin-right: 4px" value-format="YYYY/MM/DD" v-model="date" type="date"
                    placeholder="Pick a day"/>
    <el-input ref="inputRef" style="max-width: 320px" v-model="newTodoText" id="new-todo"
              placeholder="to thine own self be true"/>
    <el-tooltip class="box-item" effect="light" content="click to add" placement="right">
      <el-button style="margin-left: 4px" type="primary" @click="addNewTodo">Add</el-button>
    </el-tooltip>

  </el-form>

  <el-card style="max-width: 480px" class="up-card">
    <template #header>
      <div class="card-header">
        <span>Todos</span>
      </div>
    </template>
    <div v-if="!getUndoneTodos(todos).length">nothing to do, enjoy your day ^_^</div>
    <p class="todo-item" v-for="(todo, index) in getUndoneTodos(todos) " :key="todo.id" :title="todo.title">
      <el-checkbox @change="reverseDone(todo)" :id="todo.id" :value="todo.done" :label="todo.title+'index: '+index"
                   size="large"/>


      <span>{{ todo.date }}</span>


      <el-button @click="deleteTodo(todo)">Remove</el-button>

    </p>
    <!--    <template #footer>Footer content</template>-->

    <!--    <el-button v-if="todos.length" style="float: right;margin-bottom: 6px"-->
    <!--               type="danger" @click="clearChecked">-->
    <!--      clear checked-->
    <!--    </el-button>-->
  </el-card>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>History</span>

      </div>
    </template>
    <div v-if="!getDoneTodos(todos).length">You're new. Not much of a rind on you.</div>

    <p class="todo-item" v-for="(todo, index) in getDoneTodos(todos) " :key="todo.id" :title="todo.title">
      <el-checkbox @change="reverseDone(todo)" :id="todo.id" :value="todo.done" :label="todo.title+'index: '+index"
                   size="large"/>
      <!-- v-model="todo.done" 双向数据绑定 checkbox的v-model绑定勾选状态 -->

      <span>{{ todo.date }}</span>


      <el-button @click="deleteTodo(todo)">Remove</el-button>


    </p>
  </el-card>
</template>

<style scoped>
.form-warp {
  margin-bottom: 6px;
}

.up-card {

  margin-bottom: 4px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.head-text {
  font-size: 3em;
}

.head-icon-text {
  display: flex;
  justify-content: initial;
  align-items: flex-start;
  margin-bottom: 4px;

}
</style>