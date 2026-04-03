import React from 'react'

function Pickleball() {
  return (
    <div className='pickleball-main'>
      <div className='main-cont'>
        <span>A unique twist!</span>
        <h1>Home to the only <span>Pickleball Court</span><br /> in San Pedro Belize.</h1>
        <p>Looking for an extra spark of excitement during your tropical getaway? Mata Rocks Resort boasts the only pickleball court in the area! Whether you're a seasoned pro or new to the game, this lively activity adds a unique twist to your island experience, making your stay as active and fun as it is relaxing.</p>
        <a href="/pickle-ball" className="all-button">Read More</a>
      </div>
    </div>
  )
}

export default Pickleball

{/*import React from 'react'
import { graphql, Link, StaticQuery } from "gatsby"

function Pickleball({data}) {
  return (
    <StaticQuery 
    query={graphql`
    query Pickle{
        allGraphCmsHomePickleball {    
            edges {
              node {
                title1
                title2White
                title2BWhite
                title3Gold
                  content{
                      html
                      markdown
                      raw
                      text
                    }
              }
            }
          }
      }
    `}


render={data => ( 
    <div className='pickleball-main'>
       <div className='main-cont'>
       {data.allGraphCmsHomePickleball.edges.map(({ node: welcome }) => (
        <>
         <span>{welcome.title1}</span>
         <h1>{welcome.title2White} <span>{welcome.title3Gold}</span><br />{welcome.title2BWhite}</h1>
         </>
        ))}
        {data.allGraphCmsHomePickleball.edges.map(({ node: pick }) => (
        <div dangerouslySetInnerHTML={{ __html: pick.content.html}} /> 
        ))}
      <a href="/pickle-ball" className="all-button">Read More</a>
       </div>
    </div>
    )}
    />
  );
}

export default Pickleball*/}
