export interface Project {
  id: number,
  name: string,
  description: string,
  endTime: Date,
  startTime: Date
  company: Company,
}

export interface Company {
  id: number,
  name: string
  email: string,
  password: string,
  address: string,
  website: string,
}

export interface Person {
  id: number,
  email: string,
  password: string,
  website: string,
  birthdate: Date,
  firstName: string,
  lastName: string
}
