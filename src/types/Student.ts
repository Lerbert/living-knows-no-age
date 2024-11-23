import type { StudentWishType } from './StudentWishType'
import type { TaskType } from './TaskType'

export class Student {
  constructor(
    public name: string,
    public phone: string,
    public birthdate: Date,
    public fieldOfStudy: string,
    public preferredLocation: string,
    public nationality: string,
    public smoker: boolean,
    public hobbies: string[],
    public offers: TaskType[],
    public wishes: StudentWishType[],
    public image: string,
  ) {}

  get age(): number {
    const now = new Date()
    return now.getFullYear() - this.birthdate.getFullYear()
  }
}
