<script setup lang="ts">
import CalendarMonth from "./components/CalendarMonth.vue"
import { getCurrentYear } from "./utils/common"
</script>

<template>
    <header>
        <h1>Schedule for {{ getCurrentYear() }}</h1>
    </header>
    <main>
        <CalendarMonth v-for="month in 12" :key="month" :monthNum="month" />
    </main>
</template>

<style scoped>
main {
    display: flex;
    align-items: start;
}
</style>
