export interface registerData{
  id: string;
  email: string;
  first_name: string;
  last_name?: string;
  phone?: string;
  role: string;
  createAt: Date;
  password: string;
}