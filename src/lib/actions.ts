"use server";

export async function submitContact(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Por favor, rellena todos los campos obligatorios.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Por favor, introduce un email válido." };
  }

  // Placeholder: log the submission. Connect to Resend/Formspree later.
  console.log("Contact form submission:", { name, email, phone, message });

  return {
    success: true,
    message:
      "¡Gracias! Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas.",
  };
}
