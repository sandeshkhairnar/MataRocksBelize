import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
const headerImg = "../../../images/contactHeader.png";

function Contact() {
  const data = useStaticQuery(graphql`
    query ContactUs {
      allGraphCmsPageContactUs {
        edges {
          node {
            pageTitle
            headerImage {
              id
              imageAltText
              image {
                gatsbyImageData(quality: 60)
                url
              }
            }
            pageContent {
              html
              markdown
              raw
              text
            }
          }
        }
      }
    }
  `)

  return (
    <div className='contact-main'>
      {data.allGraphCmsPageContactUs.edges.map(({ node: about }, index) => (
        <div className="content-header" key={`contact-header-${index}`}>
          <div className="header-overlay"></div>

          <img src={about.headerImage.image.url}
            quality={60}
            formats={["auto", "webp", "avif"]}
            alt={about.headerImage.imageAltText}
          />
          <div className="header-cont">
            <h1>Contact Us</h1>
          </div>

        </div>
      ))}

      <div className='contact-cont'>
        {data.allGraphCmsPageContactUs.edges.map(({ node: about }, index) => (
          <div key={`contact-content-${index}`} dangerouslySetInnerHTML={{ __html: about.pageContent.html }} />

        ))}
      </div>
    </div>
  );
}

export default Contact
