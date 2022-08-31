import React from "react";

export default function Hero(props) {
  return (
    <div className="hero">
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5 " style={{ width: 530 }}>
            <h1 className="font-weight-bold text-white line-height-1 pt-5">
              PNM Ekuitas Syariah <br />
              Start Next Vacation
            </h1>
          </div>
        </div>
        <p className="mb-4 font-weight-light text-white">
          Merupakan reksa dana jenis saham yang investasinya sebagian besar pada
          efek saham syariah, yang tercantum dalam Daftar Efek Syariah yang
          ditetapkan Otoritas Jasa Keuangan OJK atau pihak lainnya yang diakui
          oleh OJK. Diluncurkan pada 1 Agustus 2007 lalu, reksan dana ini
          berpeluang besar untuk memperoleh pertumbuhan nilai investasi yang
          optimal dalam jangka panjang dengan tetap berpegang pada
          prinsip-prinsip syariah.
        </p>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,320L80,266.7C160,213,320,107,480,106.7C640,107,800,213,960,234.7C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
