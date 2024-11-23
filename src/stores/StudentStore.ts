import type { Student } from '@/types/Student'
import { defineStore } from 'pinia'

export const useStudents = defineStore('todos', {
  state: () => ({
    students: [] as Student[],
  }),
  actions: {
    addStudent(student: Student) {
      this.students.push(student)
    },
  },
})
