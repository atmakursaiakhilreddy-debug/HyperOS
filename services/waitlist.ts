import { WaitlistFormData, WaitlistResponse } from '../types';

// ---------------------------------------------------------------------------
// ⚡️ IMPORTANT: DEPLOYMENT REQUIRED ⚡️
// 1. Run `supabase functions deploy send-waitlist --no-verify-jwt`
// 2. Copy the URL it gives you (e.g. https://xyz.supabase.co/functions/v1/send-waitlist)
// 3. Paste it below inside the quotes.
// ---------------------------------------------------------------------------
const SUPABASE_FUNCTION_URL = 'INSERT_YOUR_SUPABASE_FUNCTION_URL_HERE';

export const submitToWaitlist = async (data: WaitlistFormData): Promise<WaitlistResponse> => {
  
  // ---------------------------------------------------------------------------
  // FALLBACK SIMULATION (Runs if you haven't set up the backend URL yet)
  // ---------------------------------------------------------------------------
  if (SUPABASE_FUNCTION_URL.includes('INSERT_YOUR')) {
    console.warn('⚠️ Backend URL not configured. Running in simulation mode.');
    console.log('--- EMAIL SIMULATION ---');
    console.log('To:', 'atmakursaiakhilreddy@gmail.com');
    console.log('Subject:', 'New HyperOS Waitlist Submission');
    console.log('Payload:', data);
    
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    return {
      success: true,
      message: "Simulation: Added to queue successfully."
    };
  }

  // ---------------------------------------------------------------------------
  // REAL IMPLEMENTATION
  // ---------------------------------------------------------------------------
  try {
    const response = await fetch(SUPABASE_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Admin email is hardcoded in backend for security
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
    throw error;
  }
};