export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5527996539413'

export function getWhatsAppLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`
  }
  return base
}

export function getScheduleLink(treatmentName?: string) {
  const msg = treatmentName
    ? `Olá! Gostaria de agendar uma consulta para ${treatmentName}. Poderia me informar os horários disponíveis?`
    : 'Olá! Gostaria de agendar uma consulta na Clínica DG. Poderia me informar os horários disponíveis?'
  return getWhatsAppLink(msg)
}
