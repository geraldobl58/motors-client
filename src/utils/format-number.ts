export default function formattedNumber(milage: number | bigint): string {
  return new Intl.NumberFormat('pt-BR').format(milage)
}
