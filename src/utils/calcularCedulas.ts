export const calcularCedulas = (valor: number) => {
  const cedulas = [100, 50, 20, 10, 5, 2];
  const resultado: { [key: number]: number } = {};

  for (const cedula of cedulas) {
    resultado[cedula] = Math.floor(valor / cedula);
    valor %= cedula;
  }

  return resultado;
};
