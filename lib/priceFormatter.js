export default function formatPrice(amount = 0) {
  let maximumFractionDigits = 2;

  if (amount % 100 === 0) {
    maximumFractionDigits = 2;
  }

  const options = {
    maximumFractionDigits,
    style: 'currency',
    currency: 'USD',
  };

  const formatter = Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
}
