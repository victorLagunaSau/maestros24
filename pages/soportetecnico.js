import React from "react";
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import SoporteTecnico from "../components/SoporteTecnico/SoporteTecnico";
import FAQ from "../components/SoporteTecnico/FAQ";
import VideoTutoriales from "../components/Videos/VideoTutoriales";

export default function Home() {
  return (
    <>
      <SeoHead title="Maestros-Pathbooks - Soporte Técnico" />
      <Layout>
        <SoporteTecnico />
        <FAQ />
        <VideoTutoriales />
      </Layout>
    </>
  );
}