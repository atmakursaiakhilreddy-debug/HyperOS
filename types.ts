import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: 'primary' | 'secondary';
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface WaitlistFormData {
  name: string;
  contactNumber: string;
  email: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
}