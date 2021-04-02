export default function priceFormat(price) {
  const priceFloat = (price / 100).toFixed(2)
  return Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(priceFloat)
}