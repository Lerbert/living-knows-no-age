<script setup lang="ts">
import { usePeople } from '@/stores/PeopleStore'

const people = usePeople()
</script>

<template>
  {{ people.$state.students }}
</template>
