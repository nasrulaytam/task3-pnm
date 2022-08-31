import React from "react";

export default function Rekening(props) {
  return (
    <section className="container">
      <h4 className="text-center mb-3">Nomor Rekening</h4>
      <div className="container-grid">
        {props.data.map((item) => {
          return (
            <div className="card card-feature">
              <figure className="img-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.nameBank}
                  className="img-cover"
                />
              </figure>
              <div className="name-bank">${item.nameBank}</div>
              <div className="address">${item.address}</div>
              <div className="name-rek">${item.nameRek}</div>
              <div className="no-rek">${item.noRek}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
