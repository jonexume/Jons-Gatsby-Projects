import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> I am making this my Gatsby tutorial because I am the bomb.com for this bs.</p>
      <StaticImage
      alt="This is the car that I want to be my everyday driver"
      src="../images/batman-stance.jpg"
      />
    </Layout>
  )
}

export default IndexPage
