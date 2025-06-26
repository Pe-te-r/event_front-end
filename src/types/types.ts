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

export interface eventsType{
  event_id: string;
  event_date: Date;
  createAt: Date;
  event_description: string;
  event_location: string;
  event_name: string
  updatedAt: Date;
}



