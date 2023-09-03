<script setup lang="ts">
import { monthNumToName } from "../utils/common"

const props = defineProps<{
    monthNum: number
}>()
</script>

<template>
    <thead>
        <tr>
            <th>{{ monthNumToName(props.monthNum) }}</th>
        </tr>
    </thead>
</template>

<style scoped></style>
