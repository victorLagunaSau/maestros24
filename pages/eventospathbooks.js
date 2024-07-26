import React from "react";
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import EventosPathbooks from "../components/EventosPathbooks/EventosPathbooks";


export default function Home() {
  return (
    <>
      <SeoHead title="Maestros-Pathbooks - Soporte Técnico" />
      <Layout>
        <EventosPathbooks />

      </Layout>
    </>
  );
}