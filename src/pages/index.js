import Layout from '../components/layout';
import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Bio from '../components/bio';
import { rhythm } from '../utils/typography';

const homePage = ({ data,location }) => {
  let github = data.site.siteMetadata.social.github;
  let title = data.site.siteMetadata.title;
  
	return (
		<Layout location={location} title={title}>
			<SEO title="Home Page" />
			<Bio />
			<h3 style={{ marginBottom: rhythm(1 / 4) }}>
				<Link style={{ boxShadow: `none` }} to="/blogs">
					Blogs
				</Link>
			</h3>
      <p>I have decided to pen down my thoughts on certain topics
        ranging from career goals to technical topics also.
        I have just started writing blogs! and really enjoying it!
      </p>
			<h3 style={{ marginBottom: rhythm(1 / 4) }}>
				<Link style={{ boxShadow: `none` }} to="/projects">
					Projects
				</Link>
			</h3>
			<p>
				Apart from regular work, I learn and create things in public. My projects can be found on{' '}
				<Link to={github}>Github</Link>. If you feel like collaborating with me on any project, ping me on any
				of the channels.
			</p>
		</Layout>
	);
};

export default homePage;

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