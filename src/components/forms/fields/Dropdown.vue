<template>
  <div class="position-relative">
    <input
      type="text"
      class="form-control"
      :placeholder="placeholder"
      v-model="inputValue"
      :disabled="disabled"
      @input="onInput"
      @focus="showDropdown = true"
      @blur="hideDropdown"
    />
    <div class="dropdown-menu show" v-if="showDropdown && filteredOptions.length">
      <button
        class="dropdown-item"
        v-for="option in filteredOptions"
        :key="option"
        @mousedown.prevent="selectOption(option)"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, defineProps } from 'vue'

interface Props {
  modelValue: string | null
  placeholder?: string
  options: string[]
  disabled: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const inputValue = ref<string>(props.modelValue ?? '')
const showDropdown = ref<boolean>(false)

const onInput = () => {
  emit('update:modelValue', inputValue.value)
}

const filteredOptions = computed(() => {
  if (!inputValue.value) {
    return props.options
  }
  return props.options.filter((option) =>
    option.toLowerCase().includes(inputValue.value.toLowerCase()),
  )
})

const selectOption = (option: string) => {
  inputValue.value = option
  emit('update:modelValue', option)
  showDropdown.value = false
}

const hideDropdown = () => {
  setTimeout(() => {
    showDropdown.value = false
  }, 200) // Delay to allow click event on dropdown items
}
</script>

<style scoped>
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
