import React from "react";
import Layout from "../common/layouts";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Seo from "../common/seo";

export default ({ props, data }) => (
  <Layout>
    <Seo
      title={`About ${data.site.siteMetadata.title}`}
      description={data.markdownRemark.frontmatter.title}
    />

    <div className="relative">
      <Img
        fluid={data.banner.childImageSharp.fluid}
        className="mw10 center"
        style={{
          height: "200px"
        }}
      />
      <h1
        className="fw1 tc f2 display absolute dn dib-ns"
        style={{
          bottom: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontFamily: "arial",
          fontWeight: "bold"
        }}
      >
        {" "}
        PRENDRE RENDEZ-VOUS
      </h1>
    </div>
    <div className="mw9 center flex flex-wrap pv5-l w-100">
      <div className="mw7 w-100 pa2">
        <h1 className="display fw1 db lh-copy">
          {data.markdownRemark.frontmatter.title}
        </h1>
      </div>
      <div
        className="mw7 w-100 lh-copy serif pa2 flex flex-column justify-center f4"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </div>
  </Layout>
);

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { name: { eq: "contact__info" } }) {
      html
      frontmatter {
        title
      }
    }
    banner: file(relativePath: { eq: "img/page-banner.png" }) {
      childImageSharp {
        fluid(maxHeight: 300, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
