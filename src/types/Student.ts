import type { StudentWishType } from './StudentWishType'
import type { TaskType } from './TaskType'

export class Student {
  constructor(
    public name: string,
    public phone: string,
    public birthdate: Date,
    public fach: string,
    public standort: string,
    public nationality: string,
    public raucher: boolean,
    public hobbies: string,
    public tasks: TaskType[],
    public wishes: StudentWishType[],
  ) {}

  get age(): number {
    const now = new Date()
    return now.getFullYear() - this.birthdate.getFullYear()
  }
}
