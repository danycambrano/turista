import React, { useState, useEffect } from "react";

//Informacion de tipo JSON
import Datos from "../services/Datos.json";

function FormInformacion() {
  const [lista, setLista] = useState(Datos);

  useEffect(() => {
    console.log(lista);
  }, []);

  return (
    <div className="container p-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Direccion</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((dato) => {
            return (
              <tr>
                <th scope="row">{dato.id}</th>
                <td>{dato.Nombre}</td>
                <td>{dato.Apellidos}</td>
                <td>{dato.Direccion}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p />
      <h1>Información con tarjetas</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {lista.map((datos2) => {
          return (
            <div class="col">
              <div class="card h-100">
                <img src={datos2.img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{datos2.Nombre}</h5>
                  <p class="card-text">
                    {datos2.Direccion}
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                <button type="button" class="btn btn-primary">Modificar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FormInformacion;
