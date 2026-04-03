import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"

function Welcome() {
  const data = useStaticQuery(graphql`
    query Pickle {
      allGraphCmsHomeWelcome {
        edges {
          node {
            title1
            title2White
            title3Gold
            welcomeText {
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
    <div className='welcome-main'>
      <div className='main-cont'>
        {data.allGraphCmsHomeWelcome.edges.map(({ node: welcome }, index) => (
          <React.Fragment key={`welcome-title-${index}`}>
            <span>{welcome.title1}</span>
            <h1>{welcome.title2White} <br /><span>{welcome.title3Gold}</span></h1>
          </React.Fragment>
        ))}
        {data.allGraphCmsHomeWelcome.edges.map(({ node: welcome }, index) => (
          <div key={`welcome-text-${index}`} dangerouslySetInnerHTML={{ __html: welcome.welcomeText.html }} />
        ))}
        <a href="/contact-us/" className="all-button">Read More</a>
      </div>
    </div>
  );
}

export default Welcome

