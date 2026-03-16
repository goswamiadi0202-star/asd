'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactState = {
  success?: boolean
  error?: string
} | null

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    service: formData.get('service') as string,
    message: formData.get('message') as string,
  }

  const result = contactSchema.safeParse(raw)
  if (!result.success) {
    return { error: result.error.issues[0].message }
  }

  try {
    // Store in Sanity
    if (process.env.SANITY_API_TOKEN) {
      const { writeClient } = await import('@/sanity/lib/client')
      if (writeClient) await writeClient.create({
        _type: 'contactSubmission',
        ...result.data,
        submittedAt: new Date().toISOString(),
        read: false,
      })
    }

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'ASD Digital <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'aditya.goswami@asd-digital.com',
        subject: `New inquiry from ${result.data.name} - ${result.data.service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${result.data.name}</p>
          <p><strong>Email:</strong> ${result.data.email}</p>
          <p><strong>Service:</strong> ${result.data.service}</p>
          <p><strong>Message:</strong></p>
          <p>${result.data.message}</p>
        `,
      })
    }

    return { success: true }
  } catch {
    return { error: 'Something went wrong. Please try again.' }
  }
}
