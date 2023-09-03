<script setup lang="ts">
import CalendarMonth from "./CalendarMonth.vue"
import { getCurrentYear } from "../utils/common"

const currentYear = getCurrentYear()
</script>

<template>
    <header>
        <h1>Schedule for {{ currentYear }}</h1>
    </header>
    <main>
        <CalendarMonth v-for="month in 12" :key="month" :monthNum="month" :year="currentYear" />
    </main>
</template>

<style scoped>
main {
    display: flex;
    align-items: start;
}
</style>
