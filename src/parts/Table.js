import React from "react";
import Table from "react-bootstrap/Table";

export default function Hero(props) {
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <p className="mb-4 font-weight-light text-grey-500 w-75">
            29 August 2022
          </p>
          <h1 className="font-weight-bold line-height-1">1240.39</h1>
          <p>NAB/Unit</p>
        </div>
      </div>
      <Table striped bordered hover center>
        <thead>
          <tr>
            <th>1 Bulan</th>
            <th>3 Bulan</th>
            <th>6 Bulan</th>
            <th>YoY</th>
            <th>YTD</th>
            <th>Since Inception</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1%</td>
            <td>2%</td>
            <td>3%</td>
            <td>4%</td>
            <td>5%</td>
            <td>6%</td>
          </tr>
        </tbody>
      </Table>
      <p>Lihat NAB Lebih Lengkap-></p>
    </section>
  );
}
