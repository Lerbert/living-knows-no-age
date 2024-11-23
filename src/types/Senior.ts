import type { StudentWishType } from './StudentWishType'
import type { TaskType } from './TaskType'

export class Senior {
  constructor(
    public name: string,
    public phone: string,
    public birthdate: Date,
    public preferredLocation: string,
    public offers: StudentWishType[],
    public wishes: TaskType[],
    public allowSmokers: boolean,
  ) {}

  get age(): number {
    const now = new Date()
    return now.getFullYear() - this.birthdate.getFullYear()
  }
}
