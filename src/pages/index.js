import React from "react";
import Layout from "../common/layouts";
import { graphql } from "gatsby";
import About from "../homepage/components/about";
import Bio from "../homepage/components/bio";
import Seo from "../common/seo";

export default ({ data }) => {
  return (
    <Layout>
      <Seo
        title={"Home Page"}
        description={data.site.siteMetadata.description}
      />
      <About />
      <Bio />
    </Layout>
  );
};

export const query = graphql`
  query {
    featuredPost: allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    cards: allMarkdownRemark(
      skip: 1
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description: metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;
