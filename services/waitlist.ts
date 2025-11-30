import { WaitlistFormData, WaitlistResponse } from '../types';

// TODO: AFTER DEPLOYING YOUR SUPABASE FUNCTION (See instructions), PASTE THE URL BELOW
// Example: "https://project-ref.supabase.co/functions/v1/send-waitlist"
const SUPABASE_FUNCTION_URL = 'INSERT_YOUR_SUPABASE_FUNCTION_URL_HERE';

export const submitToWaitlist = async (data: WaitlistFormData): Promise<WaitlistResponse> => {
  
  // ---------------------------------------------------------------------------
  // FALLBACK SIMULATION (Runs if you haven't set up the backend URL yet)
  // ---------------------------------------------------------------------------
  if (SUPABASE_FUNCTION_URL === 'INSERT_YOUR_SUPABASE_FUNCTION_URL_HERE') {
    console.warn('⚠️ Backend URL not set in services/waitlist.ts. Running in simulation mode.');
    console.log('--- PAYLOAD TO BE SENT ---');
    console.log('To Admin:', 'atmakursaiakhilreddy@gmail');
    console.log('User Data:', data);
    
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    return {
      success: true,
      message: "Simulation: Added to queue successfully."
    };
  }

  // ---------------------------------------------------------------------------
  // REAL IMPLEMENTATION (Runs once you add the URL)
  // ---------------------------------------------------------------------------
  try {
    const response = await fetch(SUPABASE_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        adminEmail: 'atmakursaiakhilreddy@gmail' // Sending this to backend to know where to email
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to submit waitlist');
    }

    return {
      success: true,
      message: "You've been added to the queue."
    };
  } catch (error) {
    console.error('Waitlist submission error:', error);
    // Optional: Return false here if you want to show an error message to user
    // For now, we log it and throw so the UI stays in loading or handles error
    throw error;
  }
};