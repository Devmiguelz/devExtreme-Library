export interface Priority {
    text: string;
    id: number;
    color: string;
  }
  
  export interface Resource {
    text: string;
    id: number;
    color: string;
  }
  
  export interface Appointment {
    text: string;
    ownerId: number[];
    priority: number;
    startDate: Date;
    endDate: Date;
  }