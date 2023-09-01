<script setup lang="ts">
import CalendarMonth from "./components/CalendarMonth.vue"
import { getCurrentYear } from "./utils/common"
</script>

<template>
    <header>
        <h1>Schedule for {{ getCurrentYear() }}</h1>
    </header>
    <main>
        <span id="months-container">
            <CalendarMonth v-for="month in 12" :key="month" :monthNum="month" />
        </span>
    </main>
</template>

<style scoped>
#months-container {
    display: flex;
    align-items: start;
}
</style>
