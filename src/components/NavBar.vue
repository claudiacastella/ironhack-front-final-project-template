<template>
    <header class="bg-yellow-200 text-slate-800 ">
        <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
            <div id="logo" class="flex items-center gap-x-4">
                <img src="" alt="">
                <h1 class="text-lg">CCG Task Manager</h1>
            </div>
            <ul class=" flex flex-1 justify-end gap-x-10">
                <router-link class="cursor-pointer" :to="{name : 'Home'}">Home</router-link>
                <li class="cursor-pointer ">Logout</li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

</script>

<style scoped>

</style>