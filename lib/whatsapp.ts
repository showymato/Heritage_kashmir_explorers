export const generateWhatsAppUrl = (message: string, phoneNumber = "919876543210") => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export const openWhatsApp = (message: string, phoneNumber?: string) => {
  const url = generateWhatsAppUrl(message, phoneNumber)
  window.open(url, "_blank")
}

export const whatsAppMessages = {
  generalEnquiry:
    "Hi Heritage Kashmir Explorers! I'm interested in planning a trip to Kashmir/Ladakh. Can you help me with more information?",

  tourEnquiry: (tourTitle: string) =>
    `Hi! I'm interested in the "${tourTitle}" tour. Can you please provide more details about pricing, availability, and booking process?`,

  customTrip:
    "Hi! I would like to plan a custom trip to Kashmir/Ladakh. Can you help me create a personalized itinerary?",

  quickChat: "Hi! I have some questions about Kashmir/Ladakh tours. Can we chat?",
}

export const phoneNumber = "+91 9876543210"
