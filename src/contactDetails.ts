export const companyEmail = "ouakfycrest@gmail.com";
export const businessPhone = "09124659461";
export const whatsappNumber = `234${businessPhone.slice(1)}`;
export const instagramUrl = "https://www.instagram.com/ouakfycrest/";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
