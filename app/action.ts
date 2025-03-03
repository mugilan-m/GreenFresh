'use server'
import { redirect } from 'next/navigation'
 

export async function ContactFormData(formData: FormData) {
  console.log("formData",formData);
  redirect('/')
}


export async function SiginFormData(formData: FormData) {
  console.log("formData->", formData);
  // if (typeof window !== 'undefined') {
  //   const formObject: { [key: string]: any } = {};
  //   formData.forEach((value, key) => {
  //     formObject[key] = value;
  //   });
  //   localStorage.setItem('LoginData', JSON.stringify(formObject));
  // }
  console.log("submitted");
  //redirect('/')
}