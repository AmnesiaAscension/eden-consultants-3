
export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  scope: string;
  outcome: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}
