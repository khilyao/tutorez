export type Inputs = {
  name: string;
  email: string;
  phone: string;
  other?: string;
  subject?: string;
};

export interface ICreateUserForm {
  name: string;
  subject: string;
  contact: string;
  role: string;
  comment: string;
  password: string;
  login: string;
}

export interface IAddStudentForm {
  name: string;
  subject: string;
  login: string;
  contact: string;
  price: string;
  status: string;
  comment: string;
  role: string;
  tutor: string;
}
