import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "img/sisi-banner.png" }) {
          childImageSharp {
            fluid(maxWidth: 1900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            homepageHeader
            homepageAbout
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="Sisi-Header"
          className="w-100 vh-50 mw10 center"
        />
        <div className="bg-washed-red flex flex-column justify-center items-center pa2 pv5">
          <h1 className="fw1 display db dark-gray f2 tc">
            {data.site.siteMetadata.homepageHeader}
          </h1>
          <p className="f4 serif mw7 tc lh-copy">
            {data.site.siteMetadata.homepageAbout}
          </p>
          <Link
            to="mailto:stuon@outlook.com"
            className="mt3 db no-underline ph5 pv3 sans-serif near-white bg-dark-gray ttu tracked b hover-bg-mid-gray"
          >
            PRENDRE RENDEZ-VOUS
          </Link>
          <p>(ou appelez-nous au 514-967-4535)</p>
        </div>
      </React.Fragment>
    )}
  />
);
