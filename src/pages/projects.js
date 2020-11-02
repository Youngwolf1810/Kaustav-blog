import React from 'react';
import Layout from '../components/layout';
import {Link,graphql} from 'gatsby';
import Bio from "../components/bio"
import SEO from "../components/seo"

const projectsPage = ({data,location})=>{

    let github = data.site.siteMetadata.social.github;
    let title = data.site.siteMetadata.title;
    return(
        <Layout location={location} title={title}>
            <SEO title="Projects"/>
            <Bio />
            <h2>Projects</h2>
            <p>Apart from regular work, I learn and create things in public. 
            My projects can be found on <Link to={github}>Github</Link>.
            If you feel like collaborating with me 
            on any project, ping me on any of the channels.</p>
        </Layout>
    )
}

export default projectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
          title
        social{
            github
        }
      }
    }
}`