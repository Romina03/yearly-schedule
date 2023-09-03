<script setup lang="ts">
defineProps<{
    date: number
    isWeekend: boolean
}>()
</script>

<template>
    <tr :class="{ weekend: isWeekend }">
        <td>
            {{ date }}
        </td>
    </tr>
</template>

<style scoped>
tr {
    background-color: var(--color-bg) !important;
}

.weekend {
    background-color: var(--color-accent) !important;
}
</style>
