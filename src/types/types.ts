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


// types/user.ts or wherever you store types

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
  registration_count: number
  feedbacks: Feedback[]
}
