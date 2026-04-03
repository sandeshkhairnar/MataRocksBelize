import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"

function About() {
  const data = useStaticQuery(graphql`
    query Restaurant {
      allGraphCmsHomeRestaurant {
        edges {
          node {
            title1
            title2White
            title3Gold
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

  return (
    <div className='about-main'>
      <div className='cont'>
        <div className='row'>
          <div className='col-sm-6'>
            {data.allGraphCmsHomeRestaurant.edges.map(({ node: welcome }, index) => (
              <React.Fragment key={`about-title-${index}`}>
                <h2>{welcome.title1}</h2>
                <h1>{welcome.title2White}<span> {welcome.title3Gold}</span></h1>
              </React.Fragment>
            ))}
            {data.allGraphCmsHomeRestaurant.edges.map(({ node: welcome }, index) => (
              <div key={`about-text-${index}`} dangerouslySetInnerHTML={{ __html: welcome.content.html }} />
            ))}
            <a className="all-button" href="/restaurant-and-bar/" >Restaurant & Bar</a>
          </div>
          <div className='col-sm-6'>

          </div>
        </div>
      </div>

    </div>
  );
}

export default About
