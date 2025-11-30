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
  email: string;
  name?: string;
  role?: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
}