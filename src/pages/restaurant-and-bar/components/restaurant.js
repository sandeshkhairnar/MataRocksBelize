import React from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, Link, useStaticQuery } from "gatsby"

const headerImg = "../../../images/foodHeader.png";
const slide1 = "../../../images/spaghetti.png";
const slide2 = "../../../images/sub.png";
const slide3 = "../../../images/burger.png";
const slide4 = "../../../images/juice.png";
const slide5 = "../../../images/mojito.png";
const slide6 = "../../../images/greenJuice.png";

function Restaurant() {
  const data = useStaticQuery(graphql`
    query DineIn {
      allGraphCmsPageDineIn {
        edges {
          node {
            menuSlider {
              imageAltText
              imageTitle
              image {
                gatsbyImageData
                url
              }
            }
            headerImage {
              imageAltText
              imageTitle
              image {
                gatsbyImageData
                url
              }
            }
            title2
            title1
            pageTitle
            content {
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

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 575, // For mobile devices (adjust as needed)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices (adjust as needed)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For tablets or smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="restaurant-main">
      {data.allGraphCmsPageDineIn.edges.map(({ node: about }, index) => (
        <div className="content-header" key={`header-${index}`}>
          <div className="header-overlay"></div>
          <img src={about.headerImage.image.url}
            quality={60}
            formats={["auto", "webp", "avif"]}
            alt={about.headerImage.imageAltText}
          />
          <div className="header-cont">
            <h1>{about.pageTitle}</h1>
          </div>
        </div>
      ))}
      <div className="main-cont">
        <div className="tours-slider">
          <div className="slider-container">

            {data.allGraphCmsPageDineIn.edges.map(({ node: gallery }, index) => (
              <Slider {...settings} key={`slider-${index}`}>

                {(gallery.menuSlider || []).map((galleryMap, id) => (
                  <div className="tour-slide" key={`slide-${id}`}>
                    <a>
                      <div className="absolute-overlay"></div>
                      <img src={galleryMap.image.url}
                        quality={60}
                        formats={["auto", "webp", "avif"]}
                        placeholder="blurred"
                        alt={galleryMap.imageAltText} />

                      <div className="absolute-desc">
                        <span>
                          <h1>Cave Tubing</h1>
                          <p>Desserts</p>
                        </span>
                      </div>
                    </a>
                  </div>
                ))}

              </Slider>
            ))}

          </div>
        </div>
        <div className="menu-content">
          <div className="menu">
            {data.allGraphCmsPageDineIn.edges.map(({ node: about }, index) => (
              <React.Fragment key={`menu-intro-${index}`}>
                <h2>{about.title1}</h2>
                <h1>{about.title2}</h1>
                <span dangerouslySetInnerHTML={{ __html: about.content.html }} />
              </React.Fragment>
            ))}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  data-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Food
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  data-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Drinks
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="menu-cont">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul className="menu-items">
                        <li className="item">
                          <div>
                            <h3>Brushetta</h3>
                            <p>
                              baguette toasted with tomato, onion, balsamic &
                              olive oil
                            </p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$12USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Calamari</h3>
                            <p>Fried calamari served with marinara sauce</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$14USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Arancini</h3>
                            <p>Deep fried rice balls stuffed with cheese</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$12USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Carbonara</h3>
                            <p>
                              Fettuccine with egg, parmesan, cured meat & pepper
                            </p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$20USD</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="menu-items">
                        <li className="item">
                          <div>
                            <h3>Spaghetti & Meatballs</h3>
                            <p>Italian classic</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$16USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Eggplant Parm</h3>
                            <p>Eggplant fried with parmesan cheese</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$21USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Chicken Scarpariello</h3>
                            <p>Chicken with sweet sausage & peppers</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$25USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Penne Bolognese</h3>
                            <p>Penne in a ground beef and tomato sauce</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$18USD</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="menu-cont">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul className="menu-items">
                        <li className="item">
                          <div>
                            <h3>Torresella Rosé</h3>
                            <p>SPUMANTE</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$14USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>SIP Moscato</h3>
                            <p>BIANCO</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$13USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Cavaliere D'Oro Pinot Grigio</h3>
                            <p>BIANCO</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$10USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Klinker Brick Albarino</h3>
                            <p>BIANCO</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$13USD</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="menu-items">
                        <li className="item">
                          <div>
                            <h3>Concrete Cabernet Sauvignon</h3>
                            <p>ROSSO</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$15USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Ruffino Chianti</h3>
                            <p>ROSSO</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$12USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Mondavi Private Selection Cab Sauv</h3>
                            <p>ROSSO</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$9USD</h3>
                          </div>
                        </li>
                        <li className="item">
                          <div>
                            <h3>Mondavi Private Selection Pinot Noir</h3>
                            <p>ROSSO</p>
                          </div>
                          <div></div>
                          <div>
                            <h3>$9USD</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
