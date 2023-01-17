<template>
    <div class="bg-emerald-300 text-slate-800">
        This is the footer
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";

</script>

<style scoped>

</style>