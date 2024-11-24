import { Student } from '@/types/Student'
import { StudentWishType } from '@/types/StudentWishType'
import { TaskType } from '@/types/TaskType'
import { defineStore } from 'pinia'
import MaximilianBauerImage from '../images/MaximilianBauer.jpg'
import LenaMuellerImage from '../images/LenaMueller.jpg'
import FelixFabelhaftImage from '../images/FelixFabelhaft.jpg'
import SophieSchneiderImage from '../images/SophieSchneider.jpg'
import { Senior } from '@/types/Senior'

export const usePeople = defineStore('people', {
  state: () => ({
    seniors: [
      new Senior(
        'Gertrud Gabel',
        '+49 89 2784331',
        new Date('1938-03-27'),
        'Schwabing',
        [StudentWishType.StudyRoom, StudentWishType.Garden, StudentWishType.Piano],
        [TaskType.Housework, TaskType.Maintenance, TaskType.ComputerSkills, TaskType.Companionship],
        false,
      ),
    ],
    students: [
      new Student(
        'Felix Fabelhaft',
        '+49 176 4232759',
        new Date('2005-08-15'),
        'Architektur',
        'Maxvorstadt',
        'Deutsch',
        false,
        ['Klavier spielen', 'singen', 'wandern'],
        [TaskType.Housework, TaskType.Maintenance, TaskType.Companionship],
        [StudentWishType.Cook, StudentWishType.Piano],
        FelixFabelhaftImage,
      ),
      new Student(
        'Lina Jung',
        '+49 176 4232759',
        new Date('2003-01-10'),
        'Informatik',
        'Schwabing',
        'Deutsch',
        false,
        ['programmieren', 'lesen', 'radfahren'],
        [TaskType.ComputerSkills, TaskType.Handicrafts, TaskType.Companionship],
        [StudentWishType.Workshop],
        LenaMuellerImage,
      ),
      new Student(
        'Maximilian Bauer',
        '+49 176 4232759',
        new Date('2002-02-20'),
        'Maschinenbau',
        'Garching',
        'Deutsch',
        false,
        ['3D-Druck', 'Robotik', 'joggen'],
        [TaskType.Maintenance, TaskType.Gardening, TaskType.Companionship],
        [StudentWishType.Workshop, StudentWishType.Garden],
        MaximilianBauerImage,
      ),
      new Student(
        'Sophie Schneider',
        '+49 176 4232759',
        new Date('2004-07-05'),
        'Medizin',
        'Haidhausen',
        'Deutsch',
        true,
        ['ehrenamtliche Arbeit', 'malen', 'Yoga'],
        [TaskType.EscortServices, TaskType.Companionship],
        [StudentWishType.StudyRoom],
        SophieSchneiderImage,
      ),
    ],
  }),
  actions: {
    addStudent(student: Student) {
      this.students.push(student)
    },
  },
})
