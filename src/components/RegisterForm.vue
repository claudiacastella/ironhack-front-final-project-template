<template>
  <form class="bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg m-8">
    <h1 class="text-3xl font-bold mb-4">Register</h1>
    <div class="mb-4">
      <label for="email" class="block font-bold mb-2 text-gray-700"
        >Email</label
      >
      <input
        type="email"
        v-model="email"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
      <div class="errorMsg" v-if="errMsg">{{ errMsg }}</div>
    </div>
    <div class="mb-4">
      <label for="password" class="block font-bold mb-2 text-gray-700"
        >Password</label
      >
      <input
        type="password"
        v-model="password"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block font-bold mb-2 text-gray-700"
        >Repeat Password</label
      >
      <input
        type="password"
        v-model="repeatPassword"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
      <div class="errorMsg" v-if="showPass">{{ errPass }}</div>
    </div>
    <button
      type="submit"
      class="w-full p-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold"
    >
      Register
    </button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
const email = ref(null);
const password = ref(null);
const repeatPassword = ref(null);
const errMsg = ref(null);
const errPass = ref("Passwords don't match")
const showPass = ref(false);

watch(email, (newEmail) => {
  if (newEmail.length < 6) {
    errMsg.value = "The email should have at least 6 characters.";
  } else if (!newEmail.includes("@")) {
    errMsg.value = "The email should have an @";
  } else if (newEmail.indexOf(".") < newEmail.indexOf("@")) {
    errMsg.value = "The email should have a . after the @";
  } else errMsg.value = null;
});

watch (repeatPassword, (newRepeatPassword) => {
    if (newRepeatPassword !== password.value) {
        showPass.value = true;
    } else showPass.value = false;
});

</script>

<style scoped>
.errorMsg {
  color: chocolate;
  height: 50px;
  padding-top: 20px;
}
</style>
