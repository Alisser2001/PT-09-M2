export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

//Las actions serán utilizadas por los eventos onClick de los botones, o en general de cualquier evento
//Relacionado con botones o elementos input


export const increment = () => { //action
  // Completa la funcion
  return {
    type: INCREMENT
  }
};

export const decrement = () => { //action
  // Completa la funcion
  return{
    type: DECREMENT
  }
};