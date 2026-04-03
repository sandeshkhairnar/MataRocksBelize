import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Container, Button, Col } from "react-bootstrap"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";


function Rooms() {
  const data = useStaticQuery(graphql`
    query RoomsListings{
          allGraphCmsRooms {
            edges {
              node {
                id
                roomTitle
                adultCount
                area
                bathroomCount
                bedCount
                childCount
                price
                slug
                cloudbedsLink
                description {
                  html
                  text
                  raw
                }
                roomImage {
                  id
                  imageAltText
                  imageTitle
                  image{
                    gatsbyImageData(placeholder: NONE, quality: 60)
                    url
                  }
                }
              }
            }
          }
      }
    
  `);

  return (
    <div className="all-rooms">
      <div className="content-header">
        <div className="header-overlay"></div>
        <StaticImage
          src="../../../images/roomsHeader.png"
          quality={60}
          formats={["auto", "webp", "avif"]}
        />
        <div className="header-cont">
          <h1>All Rooms</h1>
        </div>
      </div>
      <div className="rooms-main">
        <div className="rooms-grid">

          <div className="data-wrapper">
            <div className="gallery">
              <div className="image-gallery">
                <div className="photos">
                  {data.allGraphCmsRooms.edges.map(({ node: blockMap }) => (
                    <div>
                      <div className="main-content">
                        <div className="data-wrapper">
                          <div className="estate-type">
                            <div className="image-field">

                              <img src={blockMap.roomImage.image.url}
                                quality={60}
                                formats={["auto", "webp", "avif", "png", "jpg"]}
                                alt={blockMap.roomImage.imageAltText}
                              />

                              <div className="overlay">
                                <div className="content">
                                  <Container>
                                    <div className="block">
                                      <div className="desc">
                                        <div className="desc-main">
                                          <h2>{blockMap.roomTitle}</h2>

                                        </div>
                                        <div className="secondary-cont">
                                          <div>

                                            <div className="blurb" dangerouslySetInnerHTML={{ __html: blockMap.description.html }} />

                                            <br />
                                            - {blockMap.adultCount} Adults <br />
                                            - {blockMap.adultCount} Children
                                            <br />
                                            - {blockMap.bedCount} Beds
                                            <br />
                                            - {blockMap.bathroomCount} Bathroom
                                            <br />
                                            - {blockMap.area} Size
                                            <br />
                                          </div>
                                        </div>
                                        <div className="book-now-block">
                                          <a href={`${blockMap.cloudbedsLink}`} target="_blank" className="book-button">Book Now </a>

                                        </div>
                                      </div>
                                    </div>
                                  </Container>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <a className="all-button" href="/rooms">View All Rooms</a>
    </div>
  );
}

export default Rooms;

