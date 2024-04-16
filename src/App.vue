<template>
  <!-- <First />
  <Second class="active" />  -->
  <!-- <TodoDemo /> -->
  <!-- <EventDemo /> -->
  <!-- <FormBind /> -->
  <!-- <Tabs /> -->
  <div class="container">
    <h1> header </h1>
    <router-link to="/home" style="margin-right: 10px;">home</router-link>
    <router-link to="/about">about</router-link>



    <!-- <router-link :to="{ name: 'Home' }" style="margin-right: 10px;">home</router-link>
    <router-link :to="{ name: `About` }">about</router-link> -->



    <hr>
    <router-view></router-view>
  </div>

</template>


<script setup>
// import Tabs from './components/Tabs.vue';
// import TodoList from './components/TodoList.vue'

// import TodoDemo from './components/TodoDemo.vue';
// import EventDemo from './components/EventDemo.vue';
// import FormBind from './components/FormBind.vue';
// import First from "@/components/First.vue";
// import Second from "@/components/Second.vue";
// import EventButtonWrap from "@/components/EventButtonWrap.vue";
// import LifeCycle from './components/LifeCycle.vue'
// import WatchEffectDemo  from './components/WatchEffectDemo.vue'
// import TemplateRefs from './components/TemplateRefs.vue'

// import { useRouter, useRoute } from 'vue-router'
// // 使用 useRouter 获取路由实例
// const router = useRouter()

// // 使用 useRoute 获取当前路由信息
// const route = useRoute()

// // 定义一个编程式导航的函数
// const navigateToAbout = () => {
//   router.push('/about')
// }

// import ComponentBasics from './components/ComponentBasics.vue'
// import Tabs from './components/Tabs.vue'
// import VModelDemo from './components/VModelWrap.vue'
// import UserNameWrapper from './components/UserNameWrapper.vue'
// import NamedSlot from './components/NamedSlot.vue'
</script>
<style></style>
