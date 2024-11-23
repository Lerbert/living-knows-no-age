import type { Senior } from './Senior'
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
    const today = new Date()
    let age = today.getFullYear() - this.birthdate.getFullYear()
    const monthDiff = today.getMonth() - this.birthdate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthdate.getDate())) {
      age--
    }
    return age
  }

  public matchPercentage(senior: Senior) {
    const smoke = this.smoker && !senior.allowSmokers ? 0 : 1
    const seniorWishes =
      senior.wishes.filter((wish) => this.offers.includes(wish)).length / senior.wishes.length
    const studentWishes =
      this.wishes.filter((wish) => senior.offers.includes(wish)).length / this.wishes.length
    return ((smoke + seniorWishes + studentWishes) * 100) / 3
  }
}
