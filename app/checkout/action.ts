'use server'
import { redirect } from 'next/navigation'
 
export async function ContactFormData(formData: FormData) {
  redirect('/')
}