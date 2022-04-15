export interface Project {
  id: number,
  name: string,
  description: string,
  endTime: Date,
  startTime: Date
  company: Company,
}

export interface Company extends Account {
  name: string,
  address: string,
}

export interface Person extends Account {
  birthdate: Date,
  firstName: string,
  lastName: string
}

export interface Employee extends Person {
}

export interface Account {
  id: number,
  password: string,
  email: string,
  website: string
}

export interface ResponseChat {
  id: number,
  account1: AccountResponse,
  account2: AccountResponse,
  token: string
}

export interface ChatUser {
  id: number,
  name: string
}

export interface Chat {
  id: number,
  name: string,
  token: string,
  users: ChatUser[],
  messages: Message[]
}

export interface Message {
  id: number,
  source: Person | Company,
  content: string,
  time: Date,
  chat?: ResponseChat
}

export interface AccountResponse extends Account, Person, Company {
}
