<script setup lang="ts">
import CalendarDate from "./CalendarDate.vue"
import MonthHeader from "./MonthHeader.vue"

const props = defineProps<{
    monthNum: number
    year: number
}>()

const dates = new Date(props.year, props.monthNum, 0).getDate()

/**
 * Check if a date is a weekend (Saturday or Sunday)
 *
 * @param date date to check
 * @returns true if the date is a weekend, false otherwise
 */
function isWeekend(year: number, monthNum: number, date: number) {
    // Sunday: 0, Saturday: 6
    return [0, 6].includes(new Date(year, monthNum - 1, date).getDay())
}
</script>

<template>
    <table>
        <MonthHeader :month-num="monthNum" />
        <tbody>
            <CalendarDate
                v-for="date in dates"
                :key="date"
                :date="date"
                :is-weekend="isWeekend(year, monthNum, date)"
            />
        </tbody>
    </table>
</template>

<style scoped></style>
