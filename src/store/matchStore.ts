import { defineStore } from 'pinia'

export const useMatchStore = defineStore('match', {
  state: () => ({
    studentName: ''
  }),
  actions: {
    setStudentName(name: string) {
      this.studentName = name
    }
  }
})