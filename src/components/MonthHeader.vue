<script setup lang="ts">
const props = defineProps<{
    monthNum: number
}>()

const monthName = Intl.DateTimeFormat("en", { month: "long" }).format(
    new Date(props.monthNum.toString())
)
</script>

<template>
    <thead>
        <tr>
            <th>{{ monthName }}</th>
        </tr>
    </thead>
</template>

<style scoped></style>
