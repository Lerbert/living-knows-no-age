<template>
  <div>
    <label class="form-label">{{ title }}</label>
    <div class="form-check">
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
      <label class="form-check-label me-2" :for="`${id}-yes`">Ja</label>
      <div class="position-relative">
        <input
          type="text"
          class="form-control w-auto"
          :placeholder="placeholder"
          v-model="additionalInput"
          :disabled="radioSelection !== true"
          @input="updateModel"
          @focus="showDropdown = true"
          @blur="hideDropdown"
        />
        <div
          class="dropdown-menu show"
          v-if="showDropdown && radioSelection === true && filteredOptions.length"
        >
          <button
            class="dropdown-item"
            v-for="option in filteredOptions"
            :key="option"
            @click="selectOption(option)"
          >
            {{ option }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, defineProps, watch } from 'vue'

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
const showDropdown = ref<boolean>(false)

const updateModel = () => {
  if (radioSelection.value === true) {
    emit('update:modelValue', additionalInput.value)
  } else {
    emit('update:modelValue', null)
  }
}

const filteredOptions = computed(() => {
  if (!additionalInput.value) {
    return props.options
  }
  return props.options.filter((option) =>
    option.toLowerCase().includes(additionalInput.value.toLowerCase()),
  )
})

const selectOption = (option: string) => {
  additionalInput.value = option
  updateModel()
  showDropdown.value = false
}

const hideDropdown = () => {
  setTimeout(() => {
    showDropdown.value = false
  }, 200) // Delay to allow click event on dropdown items
}

// Watch for changes in radioSelection and additionalInput to update the model
watch([radioSelection, additionalInput], updateModel)
</script>

<style scoped>
.form-check {
  margin-bottom: 10px;
}
.form-check-input {
  margin-right: 5px;
}
.position-relative {
  position: relative;
}
.dropdown-menu {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
</style>
