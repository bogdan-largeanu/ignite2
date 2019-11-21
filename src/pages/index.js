import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const ignite = get(this, 'props.data.contentfulIgniteDemo')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <h2>{ignite.name}</h2>
          <h4>{ignite.specialism}</h4>
          <h4>{ignite.location}</h4>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql` 
  query HomeQuery {
      contentfulIgniteDemo {
          name
          specialism
          location
      }
    site {
        siteMetadata {
            title
        }
    }
  }
`
