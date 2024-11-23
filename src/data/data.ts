
import MaximilianBauerImage from '../images/MaximilianBauer.jpg'
import LenaMuellerImage from '../images/LenaMueller.jpg'
import FelixFabelhaftImage from '../images/FelixFabelhaft.jpg'
import SophieSchneiderImage from '../images/SophieSchneider.jpg'
import { TaskType } from '../types/TaskType'
import { StudentWishType } from '../types/StudentWishType'

export const students = [
  {
    id: 1,
    name: 'Felix Fabelhaft',
    matchPercentage: 95,
    birthdate: '2005-08-15',
    fieldOfStudy: 'Architektur',
    preferredLocation: 'Maxvorstadt',
    smoker: false,
    hobbies: ['Klavier spielen', 'singen', 'wandern'],
    offers: [TaskType.Housework, TaskType.Maintenance, TaskType.Companionship],
    wishes: [StudentWishType.Cook, StudentWishType.Piano],
    image: FelixFabelhaftImage
  },
  {
    id: 2,
    name: 'Lina Jung',
    matchPercentage: 89,
    birthdate: '2003-01-10',
    fieldOfStudy: 'Informatik',
    preferredLocation: 'Schwabing',
    smoker: false,
    hobbies: ['programmieren', 'lesen', 'radfahren'],
    offers: [TaskType.ComputerSkills, TaskType.Handicrafts, TaskType.Companionship],
    wishes: [StudentWishType.StudyRoom],
    image: LenaMuellerImage
  },
  {
    id: 3,
    name: 'Maximilian Bauer',
    matchPercentage: 89,
    birthdate: '2002-02-20',
    fieldOfStudy: 'Maschinenbau',
    preferredLocation: 'Garching',
    smoker: false,
    hobbies: ['3D-Druck', 'Robotik', 'joggen'],
    offers: [TaskType.Maintenance, TaskType.Gardening, TaskType.Companionship],
    wishes: [StudentWishType.Workshop, StudentWishType.Garden],
    image: MaximilianBauerImage
  },
  {
    id: 4,
    name: 'Sophie Schneider',
    matchPercentage: 53,
    birthdate: '2004-07-05',
    fieldOfStudy: 'Medizin',
    preferredLocation: 'Haidhausen',
    smoker: true,
    hobbies: ['ehrenamtliche Arbeit', 'malen', 'Yoga'],
    offers: [TaskType.EscortServices, TaskType.Companionship],
    wishes: [StudentWishType.StudyRoom],
    image: SophieSchneiderImage
  }
]

export const seniors = [
  {
    id: 5,
    name: 'Gertrud Gabel',
    matchPercentage: 80,
    birthdate: '1938-03-27',
    preferredLocation: 'Schwabing',
    address: 'Am Miep, 80939 München',
    houseLocation: 'Schwabing',
    roomSize: 12,
    offers: [StudentWishType.StudyRoom, StudentWishType.Garden, StudentWishType.Piano],
    wishes: [TaskType.Housework, TaskType.Maintenance, TaskType.ComputerSkills, TaskType.Companionship],
    allowSmokers: false
  }
]