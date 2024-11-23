<script setup lang="ts">
import { useStudents } from '@/stores/StudentStore'

const students = useStudents()
</script>

<template>
  {{ students.$state.students }}
</template>
