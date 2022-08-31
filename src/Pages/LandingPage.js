import React, { Component } from "react";
import Grafik from "../parts/Grafik";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Table from "../parts/Table";
import Categories from "../parts/Categories";
import Rekening from "../parts/Rekening";
import Footer from "../parts/Footer";

import landingPage from "../json/landingPage.json";
export const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Table />
      <Categories />
      <Footer />
    </>
  );
};
