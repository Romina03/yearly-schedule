<script setup lang="ts">
import CalendarDate from "./CalendarDate.vue"
import MonthHeader from "./MonthHeader.vue"
import { getDaysInMonth, isWeekend } from "../utils/common"

const props = defineProps<{
    monthNum: number
    year: number
}>()

const dates = getDaysInMonth(props.monthNum)
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
