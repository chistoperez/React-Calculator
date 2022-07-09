import "../hojas-de-estilos/Boton.css";
export default function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  );
}

// if (esOperador(props.children)) {
//   return (
//     <div
//       className="boton-contenedor operador"
//       onClick={() => props.manejarClic(props.children)}
//     >
//       {props.children}
//     </div>
//   );
// } else {
//   return (
//     <div
//       className="boton-contenedor"
//       onClick={() => props.manejarClic(props.children)}
//     >
//       {props.children}
//     </div>
//   );
// }
