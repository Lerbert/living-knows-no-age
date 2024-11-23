<template>
  <div class="form-group row">
    <label class="form-label" id="title">{{ title }}</label>
    <div>
      <div class="d-flex align-items-center">
        <div class="btn-group" role="group">
          <input
            class="btn-check"
            type="radio"
            :name="id"
            :id="`${id}-no`"
            :value="false"
            v-model="radioSelection"
            @change="updateModel"
          />
          <label class="btn btn-outline-danger" :for="`${id}-no`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </label>
          <input
            class="btn-check"
            type="radio"
            :name="id"
            :id="`${id}-yes`"
            :value="true"
            v-model="radioSelection"
            @change="updateModel"
          />
          <label class="btn btn-outline-success" :for="`${id}-yes`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path
                d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
              />
            </svg>
          </label>
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
