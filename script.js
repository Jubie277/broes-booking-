function orderWhatsApp(quantity) {
  const contactId = `contact${quantity}`;
  const nameId = `name${quantity}`;
  const whatsappId = `whatsapp${quantity}`;

  const number = document.getElementById(contactId).value;
  const name = document.getElementById(nameId).value.trim();
  const userContact = document.getElementById(whatsappId).value.trim();

  if (!name || !userContact) {
    alert("Please enter both your name and WhatsApp number to confirm your booking.");
    return;
  }

  const message = `Hi Broe's, I'd like to book ${quantity} Double Yolk eggs.\nMy name is ${name}.\nMy WhatsApp number is: ${userContact}`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
}



