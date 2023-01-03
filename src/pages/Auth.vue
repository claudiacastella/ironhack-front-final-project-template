<template>
    <Login v-if="login" />
    <Register v-else />
    <div class="flex flex-row justify-center">
      <button class="p-2 bg-green-400 rounded-sm" @click="change">{{buttonTitle}}</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Login from "../components/LoginForm.vue";
  import Register from "../components/RegisterForm.vue";
  
  const login = ref(true);
  const buttonTitle = ref("To register");
  function change() {
    login.value = !login.value;
    buttonTitle.value === "To register" ? buttonTitle.value = "To login" : buttonTitle.value === "To register";
  }
  </script>
  
  <style scoped></style>