// Blog post page-template:
// Create Pages using 'gatsby-node.js' when '.md'
// files are added to the '/src/posts/' directory

import React from "react"
import { graphql } from "gatsby"

import { Layout } from "."


// Get this data from the '.md' file
export const query = graphql`
	query PostListQuery($slug: String!) {
		markdownRemark(frontmatter: {
			slug: {
				eq: $slug
			}
		}) {
			html
			frontmatter {
				title
				date
				slug
			}
		}
	}
`

// Page template for individual blog post
export default function PostTemplate({data}) {
	const { markdownRemark } = data

	return (
		<Layout title="test">
			<h1>{markdownRemark.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{
				__html: markdownRemark.html,
			}} />
		</Layout>
	)
}
