// Blog post page-template:
// Create Pages using 'gatsby-node.js' when '.md'
// files are added to the '/src/posts/' directory

import React from "react"
import { graphql } from "gatsby"

import { Layout, Img } from "."


// Page template for individual blog post
export default function SinglePostTemplate({data}) {
	const { markdownRemark } = data
	const post = markdownRemark.frontmatter

	return (
		<Layout title="test" pageClass="post">

			{post.title && <h1>{post.title}</h1>}
			{post.date && <time>{post.date}</time>}
			{post.image && <Img image={post.image} alt={post.alt} />}

			<div dangerouslySetInnerHTML={{
				__html: markdownRemark.html,
			}} />

		</Layout>
	)
}


// Get this data from the '.md' file
export const query = graphql`
	query SinglePostQuery($slug: String!) {
		markdownRemark(frontmatter: {
			slug: {
				eq: $slug
			}
		}) {
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				slug
				image {
					childImageSharp {
						fluid(maxWidth: 1000) {
							...GatsbyImageSharpFluid
						}
					}
				}
				alt
			}
		}
	}
`
