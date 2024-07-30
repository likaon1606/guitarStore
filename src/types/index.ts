//* Puedes nombrar el archivo como index.ts o types.ts, cualquiera de las dos está bien.
// ? Solo se colocan los types que se vayan a utilizar en diferentes partes, si solo es en un lugar, no vale la pena colocarlos aquí

export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

//* Herencia

export type CarItem = Guitar & {
  quantity: number;
};


//* Herencia en interfaces - Ejemplo

// export interface CarItem extends Guitar {
//   quantity: number;
// };
