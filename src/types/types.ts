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


export interface UpdateUserDto {
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  phone?: string;
}


export interface Payment {
  payment_id: string
  amount: number
}

export interface RegisteredEvent {
  registration_id: string
  // add event name or date if needed
}

export interface CreatedEvent {
  event_id: string
  event_name: string
}

export interface Feedback {
  feedback_id: string
  comments: string
}



export interface registerDataDetailed extends registerData {
  payments?: Payment[]
  registeredEvents?: RegisteredEvent[]
  createdEvents?: CreatedEvent[]
  feedback?: Feedback[]
}

export interface Feedback {
  feedback_id: string
  comments: string
  rating: number
}

export interface EventType {
  event_id: string
  event_name: string
  event_description: string
  event_date: string
  average_rating: number
  updatedAt?: string;
  registration_count: number
  feedbacks: Feedback[]
}

export type EventTypeT = {
  event_id: string
  event_name: string
  event_date: string
  event_location: string
  event_description: string
  createAt: string
  updateAt: string
}


export interface PaymentWithRelations {
  payment_id: string;
  amount: number;
  payment_method: string;
  payment_status: string;
  whichEvent: {
    event_id: string;
    event_name: string;
    event_date: string | Date;
    event_location: string;
  };

  registration: {
    registration_id: string;
    payment_status: string; 
    payment_amount: number;
    registration_date: string | Date;
  };

  whoPaid: {
    id: string;
    first_name: string;
    email: string;
  };
}


export interface dashboardDataT{
  "totalUsers": number;
  "totalEvents": number;
  "totalRegistrations": number;
  "totalPayments": number;
  "totalRevenue": number;
}

export interface createEventT{
  event_name: string;
  event_date: string;
  event_location: string;
  event_description: string;
}