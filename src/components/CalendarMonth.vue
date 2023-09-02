<script setup lang="ts">
import CalendarDate from "./CalendarDate.vue"
import { monthNumToName, getDaysInMonth } from "../utils/common"

const props = defineProps<{
    monthNum: number
}>()

const monthName = monthNumToName(props.monthNum)
const dates = getDaysInMonth(props.monthNum)
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>{{ monthName }}</th>
            </tr>
        </thead>
        <tbody>
            <CalendarDate v-for="date in dates" :key="date" :date="date" />
        </tbody>
    </table>
</template>

<style scoped></style>
