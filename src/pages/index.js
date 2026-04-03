import * as React from "react"
import "./home/home.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Button, Container } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "./home/components/hero"

import Welcome from "./home/components/welcome"
import Rooms from "./rooms/components/rooms"
import Pickleball from "./home/components/pickleball"
import About from "./home/components/about"
import Tours from "./home/components/tours"
import Facilities from "./home/components/facilities"
import Services from "./home/components/services"
import Reviews from "./home/components/reviews"

const IndexPage = () => (
  <Layout>
    <Seo title="Hotel in San Pedro Belize" />
    <div className="elfsight-app-cf8436d9-5058-4a55-b19c-0724fcbd921d" data-elfsight-app-lazy></div>
    <Hero />
  
    <Welcome />
    <div className="homepage-rooms">
    <Rooms />
    </div>
    <Pickleball />
    <About />
    <Tours />
    <Facilities />
    <Services />
  
    
  </Layout>
)

export default IndexPage
                 