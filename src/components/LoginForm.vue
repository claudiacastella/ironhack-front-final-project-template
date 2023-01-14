<template>
  <form
    @submit.prevent="login"
    class="bg-slate-200 p-8 max-w-md mx-auto rounded-lg shadow-lg m-8"
  >
    <h1 class="text-3xl font-bold mb-8">Login</h1>
    <div class="mb-4">
      <label for="email" class=" text-xl block font-bold mb-2 text-gray-700"
        >Email</label
      >
      <input
        type="text"
        v-model="email"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
      <div class="errorMsg" v-if="showError">{{ errMsg }}</div>
    </div>
    <div class="mb-4">
      <label for="password" class="text-xl block font-bold mb-2 text-gray-700"
        >Password</label
      >
      <input
        type="password"
        v-model="password"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <button
      type="submit"
      class="mt-6 py-2 px-6 rounded-lg self-start text-md bg-emerald-300 hover:bg-emerald-500  text-white font-bold duration-200" @click="signup"
    >
      Login
    </button>
    <div class="errorMsg" v-if="errLogin">{{ errLogin.value }}</div>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
const user = useUserStore();
const router = useRouter();
const showError = ref(false);
const email = ref(null);
const password = ref(null);
const errMsg = ref(null);
const errLogin = ref(null);

watch(email, (newEmail) => {
  if (newEmail.length < 6) {
    showError.value = true;
    errMsg.value = "The email should have at least 6 characters.";
  } else if (!newEmail.includes("@")) {
    showError.value = true;
    errMsg.value = "The email should have an @";
  } else if (newEmail.indexOf(".") < newEmail.indexOf("@")) {
    showError.value = true;
    errMsg.value = "The email should have a . after the @";
  } else showError.value = false;
});

function login() {
  user.username = email.value;
  router.push("/");
}

const signup = async () => {
  try {
    const { data, error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push( {name: "Dashboard"});
  }
  catch (error) {
    errLogin.value = error.message;
    setTimeout(() => {
      errLogin.value = null;
    }, 5000);
  }
};

</script>

<style>
.errorMsg {
  color: chocolate;
  height: 50px;
  padding-top: 20px;
}
</style>
