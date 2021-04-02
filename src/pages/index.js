import * as React from "react";
import { Link } from "gatsby";
import { Jumbo, Layout, SEO } from "../components";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias/">Go to gracias</Link>
    <Link to="/cancelada/">Go to Compra cancelada</Link>
  </Layout>
)

export default IndexPage
