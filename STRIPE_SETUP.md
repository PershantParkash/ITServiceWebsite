# Stripe Payment Integration Setup Guide

## Overview
This guide will help you set up Stripe payment integration for your IT service consultation bookings. The integration allows users to pay for consultations before booking their appointment.

## Prerequisites
1. A Stripe account (sign up at https://stripe.com)
2. Node.js and npm installed
3. Your Next.js project set up

## Step 1: Install Dependencies
```bash
npm install @stripe/stripe-js stripe
```

## Step 2: Set Up Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Base URL for your application
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Getting Your Stripe Keys:
1. Log in to your Stripe Dashboard
2. Go to Developers → API Keys
3. Copy your Publishable Key and Secret Key
4. Replace the placeholder values in your `.env.local` file

## Step 3: Configure Stripe Webhook (Optional but Recommended)
For production, you should set up webhooks to handle payment confirmations:

1. In your Stripe Dashboard, go to Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhook`
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`
4. Copy the webhook signing secret to your environment variables

## Step 4: Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out the form and click "Book Consultation - £50"
4. Complete a test payment using Stripe's test card numbers:
   - **Success**: 4242 4242 4242 4242
   - **Decline**: 4000 0000 0000 0002
   - **Expiry**: Any future date
   - **CVC**: Any 3 digits

## How It Works
1. User fills out the contact form
2. Clicks "Book Consultation - £50"
3. Payment modal opens with consultation details
4. User clicks "Pay £50" and is redirected to Stripe Checkout
5. After successful payment, user is redirected to success page
6. User can then book their consultation via Calendly
7. If payment is cancelled, user is redirected to cancel page

## Files Created/Modified
- `src/components/PaymentModal.js` - Payment modal component
- `src/components/ContactForm.js` - Updated to include payment flow
- `src/app/api/create-checkout-session/route.js` - Stripe checkout API
- `src/app/success/page.js` - Success page after payment
- `src/app/cancel/page.js` - Cancel page if payment fails

## Customization Options
- **Consultation Amount**: Change the `consultationAmount` state in `ContactForm.js`
- **Consultation Details**: Modify the description in `PaymentModal.js`
- **Success/Cancel URLs**: Update the URLs in the checkout session API
- **Styling**: Customize the Material-UI components to match your brand

## Production Deployment
1. Update environment variables with live Stripe keys
2. Set `NEXT_PUBLIC_BASE_URL` to your production domain
3. Configure webhooks for payment confirmations
4. Test the complete flow in production

## Security Notes
- Never expose your `STRIPE_SECRET_KEY` in client-side code
- Always validate payments server-side
- Use HTTPS in production
- Implement proper error handling

## Support
If you encounter issues:
1. Check Stripe Dashboard for payment status
2. Verify environment variables are set correctly
3. Check browser console for JavaScript errors
4. Review server logs for API errors 