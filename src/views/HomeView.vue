<script setup lang="ts">
import YesNo from '@/components/forms/fields/YesNo.vue'
import { ref } from 'vue'

const selected = ref()
</script>

<template>
  <YesNo v-model="selected" title="Foo" /><span>{{ selected ? 'ja' : 'nein' }}</span>
</template>
