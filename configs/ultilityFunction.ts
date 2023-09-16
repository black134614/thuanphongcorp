
export const formattedAmount = (amount: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
    amount,
  ) // format to money display

export function getPercentage(number: number, total: number): number {
  if (total === 0) {
    return 0
  }
  const percentage = (number / total) * 100
  return 100 - Math.round(percentage)
}

export const convertToSlug = (str: string) => {
  if (!str) return '' // check if str is null or undefined
  // Remove accents
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  // Replace Đ with D
  str = str.replace(/[Đ]/g, 'D')

  // Replace đ with d
  str = str.replace(/[đ]/g, 'd')

  // Replace non-alphanumeric characters (including Đ and đ) with hyphens
  str = str.toLowerCase().replace(/[^a-z0-9-]+/g, '-')

  // Remove leading and trailing hyphens
  str = str.replace(/^-+|-+$/g, '')

  return str
}

export const getRandomElementFromArray = <T>(array: T[]): T | null => {
  if (!Array.isArray(array) || array.length === 0) {
    return null
  }
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
export function formatISODate(isoDate : string) {
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-based (0 = January)
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}