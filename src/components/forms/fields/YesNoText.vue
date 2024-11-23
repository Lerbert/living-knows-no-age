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
        <div class="form-check d-flex align-items-center">
          <input
            class="form-check-input"
            type="radio"
            :name="id"
            :id="`${id}-yes`"
            :value="true"
            v-model="radioSelection"
            @change="updateModel"
          />
          <label class="form-check-label me-4" :for="`${id}-yes`">Ja</label>
          <Dropdown
            v-model="additionalInput"
            :placeholder="placeholder"
            :options="options"
            :disabled="radioSelection !== true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue'
import Dropdown from './Dropdown.vue'

interface Props {
  id: string
  title: string
  modelValue: string | null
  placeholder?: string
  options: string[]
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const radioSelection = ref<boolean | null>(props.modelValue !== null)
const additionalInput = ref<string>(props.modelValue ?? '')

const updateModel = () => {
  if (radioSelection.value === true) {
    emit('update:modelValue', additionalInput.value)
  } else {
    emit('update:modelValue', null)
  }
}

// Watch for changes in radioSelection and additionalInput to update the model
watch([radioSelection, additionalInput], updateModel)
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
