<template>
    <div id="tasks" class="flex border-2 border-red-400 h-80 min-w-300">
        <!-- 
            <article class="">
                <div v-for="el in tasks" class="">
                    <div>
                        <time datetime="07/02/2022" id="timestamp" class="timestamp">{{ el.dueDate }}</time>
                        <p id="title" class="">{{el.title}}</p>
                        <p id="priority" class="">{{ el.priority }}</p>
                        <p id="short-desc" class="">{{el.description}}</p>
                        <a id="learn-more" href="" class="">Show more</a>
                    </div>
                    <div id="edit" v-if="view" @mouseover="view">
                        <img src="" alt="" @click="editTask">
                        <img src="" alt="" @click="changeStatus">
                        <img src="" alt="" @click="deleteTask">
                    </div>
                </div>
            </article>

        -->
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";

const user = useUserStore();
const router = useRouter();
const tasks = useTaskStore();







</script>

<style scoped>

</style>