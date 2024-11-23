<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
const model = defineModel<boolean | null>()
</script>

<template>
  <label class="form-label">{{ props.title }}</label>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="yesNo"
      id="yesOption"
      :value="true"
      v-model="model"
    />
    <label class="form-check-label" for="yesOption"> Ja </label>
  </div>
  <div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="yesNo"
      id="noOption"
      :value="false"
      v-model="model"
    />
    <label class="form-check-label" for="noOption"> Nein </label>
  </div>
</template>
