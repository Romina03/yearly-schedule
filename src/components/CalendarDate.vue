<script setup lang="ts">
defineProps<{
    date: number
}>()
</script>

<template>
    <tr>
        <td>
            {{ date }}
        </td>
    </tr>
</template>
