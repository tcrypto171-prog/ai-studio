export function buildWhatsAppLink(
  packageName: string,
  duration: string,
  price: string
) {
  const text = `Hello IPTVASPOLLO Team,

I would like to purchase the following subscription:

📦 Package: ${packageName}
📅 Duration: ${duration}
💰 Price: ${price}

Please send me the payment instructions and activation details.

Thank you!`;

  return `https://wa.me/${212771564433}?text=${encodeURIComponent(text)}`;
}
