export const sum = (a: number, b:number) => a + b ;
export const fatorial = (n: number):number => {
  if (n < 0) {
    return NaN;
  }
  let valor = 1;
  for (let index = 1; index <= n; index++) {
    valor *= index;
  }
  
  return valor;
}
