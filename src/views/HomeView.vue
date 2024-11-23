<script setup lang="ts">
import YesNo from '@/components/forms/fields/YesNo.vue'
import YesNoText from '@/components/forms/fields/YesNoText.vue'
import { ref } from 'vue'

const selected = ref()

const options = ['Informatik', 'Wirtschaftsinformatik', 'Medieninformatik']
</script>

<template>
  <YesNoText v-model="selected" title="Studieren Sie?" :options="options" /><span>{{
    selected
  }}</span>
</template>
