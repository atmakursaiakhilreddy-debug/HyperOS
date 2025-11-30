import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

declare const Deno: any;

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const ADMIN_EMAIL = 'atmakursaiakhilreddy@gmail.com'; // Hardcoded for safety

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, contactNumber } = await req.json();

    if (!RESEND_API_KEY) {
       console.error("Missing RESEND_API_KEY");
       throw new Error("Server misconfiguration: Missing Email API Key");
    }

    console.log(`Attempting to send email to ${ADMIN_EMAIL} for user: ${email}`);

    // Call Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'HyperOS Waitlist <onboarding@resend.dev>', // Change to your verified domain if available
        to: [ADMIN_EMAIL], // FORCE SEND TO YOU
        subject: '🚀 New HyperOS Waitlist Submission',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #0f172a;">New User Joined the Waitlist!</h1>
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Contact:</strong> ${contactNumber}</p>
            </div>
            <p style="color: #64748b; font-size: 12px; margin-top: 20px;">Sent from HyperOS Landing Page</p>
          </div>
        `
      })
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API Error:", data);
      throw new Error(data.message || 'Failed to send email');
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Function Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});