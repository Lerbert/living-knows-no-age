<template>
  <div class="form-group row">
    <label class="form-label" id="title">{{ title }}</label>
    <div>
      <div class="d-flex align-items-center">
        <div class="form-check me-4">
          <input
            class="form-check-input"
            type="radio"
            :name="id"
            :id="`${id}-no`"
            :value="false"
            v-model="radioSelection"
            @change="updateModel"
          />
          <label class="form-check-label" :for="`${id}-no`">Nein</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            :name="id"
            :id="`${id}-yes`"
            :value="true"
            v-model="radioSelection"
            @change="updateModel"
          />
          <label class="form-check-label" :for="`${id}-yes`">Ja</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue'

interface Props {
  id: string
  title: string
  modelValue: boolean | null
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const radioSelection = ref<boolean | null>(props.modelValue)

const updateModel = () => {
  emit('update:modelValue', radioSelection.value)
}

// Watch for changes in radioSelection to update the model
watch(radioSelection, updateModel)
</script>

<style scoped>
#title {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #495057;
}
.form-check {
  margin-bottom: 10px;
}
.form-check-input {
  margin-right: 5px;
}
</style>
